document.addEventListener("DOMContentLoaded", async function() {
  await ready();
});

async function ready() {
  const domain = localStorage.getItem('domain');
  let accessToken = localStorage.getItem(`access_token`);

  if (domain) document.getElementById('instance').value = domain;

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (domain && code && !accessToken) await getToken(code, domain).then(res => accessToken = res);
  if (accessToken) {
    window.location.href = '/prepare.html';
  }
}

async function auth() {
  setMessage('Please wait');

  const instance = document.getElementById('instance').value;
  const matches = instance.match(/((?:http|https):\/\/)?(.*)/);

  const protocol = matches[1];
  if (protocol) {
    localStorage.setItem('protocol', protocol);
  }
  
  const domain = matches[2];
  if (!domain) {
    setMessage('Invalid instance', false);
    return;
  }
  localStorage.setItem('domain', domain);

  // We need to run this every time in cases like Iceshrimp,
  // where the client id/secret aren't reusable (yet) because
  // they contain use-once session information.
  await registerApp(domain);

  authorize(domain);
}

async function registerApp(domain) {
  setMessage('Registering app');

  const protocol = localStorage.getItem(`protocol`) ?? `https://`;
  const appsUrl = `${protocol}${domain}/api/v1/apps`;
  const formData = new FormData();
  formData.append('client_name', 'Masto-FE standalone');
  formData.append('website', 'https://github.com/jwbjnwolf/masto-fe-standalone');
  formData.append('redirect_uris', document.location.origin + document.location.pathname);
  formData.append('scopes', 'read write follow push');

  // eslint-disable-next-line promise/catch-or-return
  await fetch(appsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(formData),
  })
    .then(async res => {
      const app = await res.json();
      localStorage.setItem(`client_id`, app.client_id);
      localStorage.setItem(`client_secret`, app.client_secret);
    });
}

function authorize(domain) {
  setMessage('Authorizing');
  const clientId = localStorage.getItem(`client_id`);
  const protocol = localStorage.getItem(`protocol`) ?? `https://`;
  document.location.href = `${protocol}${domain}/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${document.location.origin + document.location.pathname}&scope=read+write+follow+push`;
}

async function getToken(code, domain) {
  setMessage('Getting token');

  const protocol = localStorage.getItem(`protocol`) ?? `https://`;
  const tokenUrl = `${protocol}${domain}/oauth/token`;
  const clientId = localStorage.getItem(`client_id`);
  const clientSecret = localStorage.getItem(`client_secret`);

  const formData = new FormData();
  formData.append('grant_type', 'authorization_code');
  formData.append('code', code);
  formData.append('client_id', clientId);
  formData.append('client_secret', clientSecret);
  formData.append('scope', 'read write follow push');
  formData.append('redirect_uri', document.location.origin + document.location.pathname);


  // eslint-disable-next-line promise/catch-or-return
  return fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(formData),
  })
    .then(async res => {
      const app = await res.json();
      if (app.access_token) localStorage.setItem(`access_token`, app.access_token);
      return app.access_token;
    });
}

function setMessage(message, disabled = true) {
  document.getElementById('message').textContent = message;
  document.getElementById('message').style.opacity = "1";
  document.getElementById('btn').disabled = disabled; 
}