# Masto-fe standalone, but it's compiled.

Compiled from: https://github.com/jwbjnwolf/masto-fe-standalone.
Forked from: https://iceshrimp.dev/iceshrimp/masto-fe-standalone.

### Why?

- It's off-putting needing whole ass Masto's source on your server that you need to compile each time when you use GoToSocial.
- It's annoying having NodeJS, npm & yarn, and all the modules on top wasting a huge chunk of space when the only usage we make of any of that is compiling.
- And oh yea.. did I say you need to compile that shit?
- Better to leave that duty to a dev machine and push only the compiled assets to the server.

### Installation:

- Clone this repo @ for example: `/home/masto-fe/live`,
- Ensure you `chmod 755 /home/masto-fe`,
- Add to your Nginx conf & reload. Example:

```
server {
 listen 80; listen [::]:80;
 server_name masto-fe.domain.tld;
 location / { return 301 https://$host$request_uri; }
}

server {
 listen 443 ssl; listen [::]:443 ssl; http2 on;
 server_name masto-fe.domain.tld;
 root /home/masto-fe/live/public;
 index index.html;
 location / { try_files $uri /index.html; }
}
```

- Visit `masto-fe.domain.tld`, insert your instance & login.
- Happy tooting!
