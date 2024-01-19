loadState().then(_ => null);

async function loadState() {
  const domain = localStorage.getItem('domain');
  const access_token = localStorage.getItem('access_token');
  const storedState = localStorage.getItem('initial_state');

  if (!domain || !access_token) {
    window.location.href = '/login.html';
    return;
  }

  if (storedState && window.location.pathname !== '/prepare.html') {
    document.getElementById('initial-state').textContent = storedState;
  }

  const apiUrl = `https://${domain}/api`;
  const instance = await fetch(`${apiUrl}/v1/instance`).then(async p => await p.json());
  const options = {headers: {Authorization: `Bearer ${access_token}`}};
  const credentials = await fetch(`${apiUrl}/v1/accounts/verify_credentials`, options).then(async p => await p.json());
  const state = {
    "accounts": {
      "plc":{
        "accepts_direct_messages_from":"everybody",
        "acct": credentials.acct,
        "avatar": credentials.avatar,
        "avatar_static": credentials.avatar_static,
        "bot": credentials.bot,
        "created_at": credentials.created_at,
        "display_name": credentials.display_name,
        "emojis":[],
        "fields":[],
        "follow_requests_count":0,
        "followers_count": credentials.followers_count,
        "following_count": credentials.following_count,
        "fqn":`${credentials.acct}@${domain}`,
        "header": credentials.header,
        "header_static": credentials.header_static,
        "id": credentials.id,
        "last_status_at": credentials.created_at,
        "locked": credentials.locked,
        "note":"",
        "source": credentials.source,
        "statuses_count": credentials.statuses_count,
        "url": credentials.url,
        "username": credentials.acct
      }
    },
    "char_limit": instance.configuration.statuses.max_characters,
    "compose": {
      "allow_content_types": [
        "text/x.misskeymarkdown"
      ],
      "default_privacy": credentials.source.privacy,
      "default_sensitive": credentials.source.sensitive,
      "me": credentials.id
    },
    "media_attachments": {
      "accept_content_types": instance.configuration.media_attachments.supported_mime_types
    },
    "meta": {
      "access_token": access_token,
      "admin": "0",
      "advanced_layout": true,
      "auto_play_gif": false,
      "boost_modal": false,
      "compact_reaction": false,
      "delete_modal": true,
      "display_sensitive_media": false,
      "domain": domain,
      "enable_reaction": true,
      "locale": "en",
      "mascot": "/images/mascot.svg",
      "me": credentials.id,
      "reduce_motion": false,
      "show_quote_button": true,
      "base_url": `https://${domain}`,
      "streaming_api_base_url": `wss://${domain}`,
      "title": `${instance.title}`,
      "unfollow_modal": true,
      "source_url": 'https://iceshrimp.dev/iceshrimp/masto-fe-standalone',
      "version": instance.version
    },
    "max_toot_chars": instance.configuration.statuses.max_characters,
    "poll_limits": {
      "max_expiration": instance.configuration.polls.max_expiration,
      "max_option_chars": instance.configuration.polls.max_characters_per_option,
      "max_options": instance.configuration.polls.max_options,
      "min_expiration": instance.configuration.polls.min_expiration
    },
    "push_subscription": null,
    "rights": {
      "admin": false,
      "delete_others_notice": false
    },
    "settings": {
      "frequentlyUsedLanguages": {
        "en": 1
      }
    },
    "languages":[
      [
        "aa",
        "Afar",
        "Afaraf"
      ],
      [
        "ab",
        "Abkhaz",
        "аҧсуа бызшәа"
      ],
      [
        "ae",
        "Avestan",
        "avesta"
      ],
      [
        "af",
        "Afrikaans",
        "Afrikaans"
      ],
      [
        "ak",
        "Akan",
        "Akan"
      ],
      [
        "am",
        "Amharic",
        "አማርኛ"
      ],
      [
        "an",
        "Aragonese",
        "aragonés"
      ],
      [
        "ar",
        "Arabic",
        "اللغة العربية"
      ],
      [
        "as",
        "Assamese",
        "অসমীয়া"
      ],
      [
        "av",
        "Avaric",
        "авар мацӀ"
      ],
      [
        "ay",
        "Aymara",
        "aymar aru"
      ],
      [
        "az",
        "Azerbaijani",
        "azərbaycan dili"
      ],
      [
        "ba",
        "Bashkir",
        "башҡорт теле"
      ],
      [
        "be",
        "Belarusian",
        "беларуская мова"
      ],
      [
        "bg",
        "Bulgarian",
        "български език"
      ],
      [
        "bh",
        "Bihari",
        "भोजपुरी"
      ],
      [
        "bi",
        "Bislama",
        "Bislama"
      ],
      [
        "bm",
        "Bambara",
        "bamanankan"
      ],
      [
        "bn",
        "Bengali",
        "বাংলা"
      ],
      [
        "bo",
        "Tibetan",
        "བོད་ཡིག"
      ],
      [
        "br",
        "Breton",
        "brezhoneg"
      ],
      [
        "bs",
        "Bosnian",
        "bosanski jezik"
      ],
      [
        "ca",
        "Catalan",
        "Català"
      ],
      [
        "ce",
        "Chechen",
        "нохчийн мотт"
      ],
      [
        "ch",
        "Chamorro",
        "Chamoru"
      ],
      [
        "co",
        "Corsican",
        "corsu"
      ],
      [
        "cr",
        "Cree",
        "ᓀᐦᐃᔭᐍᐏᐣ"
      ],
      [
        "cs",
        "Czech",
        "čeština"
      ],
      [
        "cu",
        "Old Church Slavonic",
        "ѩзыкъ словѣньскъ"
      ],
      [
        "cv",
        "Chuvash",
        "чӑваш чӗлхи"
      ],
      [
        "cy",
        "Welsh",
        "Cymraeg"
      ],
      [
        "da",
        "Danish",
        "dansk"
      ],
      [
        "de",
        "German",
        "Deutsch"
      ],
      [
        "dv",
        "Divehi",
        "Dhivehi"
      ],
      [
        "dz",
        "Dzongkha",
        "རྫོང་ཁ"
      ],
      [
        "ee",
        "Ewe",
        "Eʋegbe"
      ],
      [
        "el",
        "Greek",
        "Ελληνικά"
      ],
      [
        "en",
        "English",
        "English"
      ],
      [
        "eo",
        "Esperanto",
        "Esperanto"
      ],
      [
        "es",
        "Spanish",
        "Español"
      ],
      [
        "et",
        "Estonian",
        "eesti"
      ],
      [
        "eu",
        "Basque",
        "euskara"
      ],
      [
        "fa",
        "Persian",
        "فارسی"
      ],
      [
        "ff",
        "Fula",
        "Fulfulde"
      ],
      [
        "fi",
        "Finnish",
        "suomi"
      ],
      [
        "fj",
        "Fijian",
        "Vakaviti"
      ],
      [
        "fo",
        "Faroese",
        "føroyskt"
      ],
      [
        "fr",
        "French",
        "Français"
      ],
      [
        "fy",
        "Western Frisian",
        "Frysk"
      ],
      [
        "ga",
        "Irish",
        "Gaeilge"
      ],
      [
        "gd",
        "Scottish Gaelic",
        "Gàidhlig"
      ],
      [
        "gl",
        "Galician",
        "galego"
      ],
      [
        "gu",
        "Gujarati",
        "ગુજરાતી"
      ],
      [
        "gv",
        "Manx",
        "Gaelg"
      ],
      [
        "ha",
        "Hausa",
        "هَوُسَ"
      ],
      [
        "he",
        "Hebrew",
        "עברית"
      ],
      [
        "hi",
        "Hindi",
        "हिन्दी"
      ],
      [
        "ho",
        "Hiri Motu",
        "Hiri Motu"
      ],
      [
        "hr",
        "Croatian",
        "Hrvatski"
      ],
      [
        "ht",
        "Haitian",
        "Kreyòl ayisyen"
      ],
      [
        "hu",
        "Hungarian",
        "magyar"
      ],
      [
        "hy",
        "Armenian",
        "Հայերեն"
      ],
      [
        "hz",
        "Herero",
        "Otjiherero"
      ],
      [
        "ia",
        "Interlingua",
        "Interlingua"
      ],
      [
        "id",
        "Indonesian",
        "Bahasa Indonesia"
      ],
      [
        "ie",
        "Interlingue",
        "Interlingue"
      ],
      [
        "ig",
        "Igbo",
        "Asụsụ Igbo"
      ],
      [
        "ii",
        "Nuosu",
        "ꆈꌠ꒿ Nuosuhxop"
      ],
      [
        "ik",
        "Inupiaq",
        "Iñupiaq"
      ],
      [
        "io",
        "Ido",
        "Ido"
      ],
      [
        "is",
        "Icelandic",
        "Íslenska"
      ],
      [
        "it",
        "Italian",
        "Italiano"
      ],
      [
        "iu",
        "Inuktitut",
        "ᐃᓄᒃᑎᑐᑦ"
      ],
      [
        "ja",
        "Japanese",
        "日本語"
      ],
      [
        "jv",
        "Javanese",
        "basa Jawa"
      ],
      [
        "ka",
        "Georgian",
        "ქართული"
      ],
      [
        "kg",
        "Kongo",
        "Kikongo"
      ],
      [
        "ki",
        "Kikuyu",
        "Gĩkũyũ"
      ],
      [
        "kj",
        "Kwanyama",
        "Kuanyama"
      ],
      [
        "kk",
        "Kazakh",
        "қазақ тілі"
      ],
      [
        "kl",
        "Kalaallisut",
        "kalaallisut"
      ],
      [
        "km",
        "Khmer",
        "ខេមរភាសា"
      ],
      [
        "kn",
        "Kannada",
        "ಕನ್ನಡ"
      ],
      [
        "ko",
        "Korean",
        "한국어"
      ],
      [
        "kr",
        "Kanuri",
        "Kanuri"
      ],
      [
        "ks",
        "Kashmiri",
        "कश्मीरी"
      ],
      [
        "ku",
        "Kurmanji (Kurdish)",
        "Kurmancî"
      ],
      [
        "kv",
        "Komi",
        "коми кыв"
      ],
      [
        "kw",
        "Cornish",
        "Kernewek"
      ],
      [
        "ky",
        "Kyrgyz",
        "Кыргызча"
      ],
      [
        "la",
        "Latin",
        "latine"
      ],
      [
        "lb",
        "Luxembourgish",
        "Lëtzebuergesch"
      ],
      [
        "lg",
        "Ganda",
        "Luganda"
      ],
      [
        "li",
        "Limburgish",
        "Limburgs"
      ],
      [
        "ln",
        "Lingala",
        "Lingála"
      ],
      [
        "lo",
        "Lao",
        "ລາວ"
      ],
      [
        "lt",
        "Lithuanian",
        "lietuvių kalba"
      ],
      [
        "lu",
        "Luba-Katanga",
        "Tshiluba"
      ],
      [
        "lv",
        "Latvian",
        "latviešu valoda"
      ],
      [
        "mg",
        "Malagasy",
        "fiteny malagasy"
      ],
      [
        "mh",
        "Marshallese",
        "Kajin M̧ajeļ"
      ],
      [
        "mi",
        "Māori",
        "te reo Māori"
      ],
      [
        "mk",
        "Macedonian",
        "македонски јазик"
      ],
      [
        "ml",
        "Malayalam",
        "മലയാളം"
      ],
      [
        "mn",
        "Mongolian",
        "Монгол хэл"
      ],
      [
        "mr",
        "Marathi",
        "मराठी"
      ],
      [
        "ms",
        "Malay",
        "Bahasa Melayu"
      ],
      [
        "mt",
        "Maltese",
        "Malti"
      ],
      [
        "my",
        "Burmese",
        "ဗမာစာ"
      ],
      [
        "na",
        "Nauru",
        "Ekakairũ Naoero"
      ],
      [
        "nb",
        "Norwegian Bokmål",
        "Norsk bokmål"
      ],
      [
        "nd",
        "Northern Ndebele",
        "isiNdebele"
      ],
      [
        "ne",
        "Nepali",
        "नेपाली"
      ],
      [
        "ng",
        "Ndonga",
        "Owambo"
      ],
      [
        "nl",
        "Dutch",
        "Nederlands"
      ],
      [
        "nn",
        "Norwegian Nynorsk",
        "Norsk Nynorsk"
      ],
      [
        "no",
        "Norwegian",
        "Norsk"
      ],
      [
        "nr",
        "Southern Ndebele",
        "isiNdebele"
      ],
      [
        "nv",
        "Navajo",
        "Diné bizaad"
      ],
      [
        "ny",
        "Chichewa",
        "chiCheŵa"
      ],
      [
        "oc",
        "Occitan",
        "occitan"
      ],
      [
        "oj",
        "Ojibwe",
        "ᐊᓂᔑᓈᐯᒧᐎᓐ"
      ],
      [
        "om",
        "Oromo",
        "Afaan Oromoo"
      ],
      [
        "or",
        "Oriya",
        "ଓଡ଼ିଆ"
      ],
      [
        "os",
        "Ossetian",
        "ирон æвзаг"
      ],
      [
        "pa",
        "Panjabi",
        "ਪੰਜਾਬੀ"
      ],
      [
        "pi",
        "Pāli",
        "पाऴि"
      ],
      [
        "pl",
        "Polish",
        "Polski"
      ],
      [
        "ps",
        "Pashto",
        "پښتو"
      ],
      [
        "pt",
        "Portuguese",
        "Português"
      ],
      [
        "qu",
        "Quechua",
        "Runa Simi"
      ],
      [
        "rm",
        "Romansh",
        "rumantsch grischun"
      ],
      [
        "rn",
        "Kirundi",
        "Ikirundi"
      ],
      [
        "ro",
        "Romanian",
        "Română"
      ],
      [
        "ru",
        "Russian",
        "Русский"
      ],
      [
        "rw",
        "Kinyarwanda",
        "Ikinyarwanda"
      ],
      [
        "sa",
        "Sanskrit",
        "संस्कृतम्"
      ],
      [
        "sc",
        "Sardinian",
        "sardu"
      ],
      [
        "sd",
        "Sindhi",
        "सिन्धी"
      ],
      [
        "se",
        "Northern Sami",
        "Davvisámegiella"
      ],
      [
        "sg",
        "Sango",
        "yângâ tî sängö"
      ],
      [
        "si",
        "Sinhala",
        "සිංහල"
      ],
      [
        "sk",
        "Slovak",
        "slovenčina"
      ],
      [
        "sl",
        "Slovenian",
        "slovenščina"
      ],
      [
        "sn",
        "Shona",
        "chiShona"
      ],
      [
        "so",
        "Somali",
        "Soomaaliga"
      ],
      [
        "sq",
        "Albanian",
        "Shqip"
      ],
      [
        "sr",
        "Serbian",
        "српски језик"
      ],
      [
        "ss",
        "Swati",
        "SiSwati"
      ],
      [
        "st",
        "Southern Sotho",
        "Sesotho"
      ],
      [
        "su",
        "Sundanese",
        "Basa Sunda"
      ],
      [
        "sv",
        "Swedish",
        "Svenska"
      ],
      [
        "sw",
        "Swahili",
        "Kiswahili"
      ],
      [
        "ta",
        "Tamil",
        "தமிழ்"
      ],
      [
        "te",
        "Telugu",
        "తెలుగు"
      ],
      [
        "tg",
        "Tajik",
        "тоҷикӣ"
      ],
      [
        "th",
        "Thai",
        "ไทย"
      ],
      [
        "ti",
        "Tigrinya",
        "ትግርኛ"
      ],
      [
        "tk",
        "Turkmen",
        "Türkmen"
      ],
      [
        "tl",
        "Tagalog",
        "Wikang Tagalog"
      ],
      [
        "tn",
        "Tswana",
        "Setswana"
      ],
      [
        "to",
        "Tonga",
        "faka Tonga"
      ],
      [
        "tr",
        "Turkish",
        "Türkçe"
      ],
      [
        "ts",
        "Tsonga",
        "Xitsonga"
      ],
      [
        "tt",
        "Tatar",
        "татар теле"
      ],
      [
        "tw",
        "Twi",
        "Twi"
      ],
      [
        "ty",
        "Tahitian",
        "Reo Tahiti"
      ],
      [
        "ug",
        "Uyghur",
        "ئۇيغۇرچە‎"
      ],
      [
        "uk",
        "Ukrainian",
        "Українська"
      ],
      [
        "ur",
        "Urdu",
        "اردو"
      ],
      [
        "uz",
        "Uzbek",
        "Ўзбек"
      ],
      [
        "ve",
        "Venda",
        "Tshivenḓa"
      ],
      [
        "vi",
        "Vietnamese",
        "Tiếng Việt"
      ],
      [
        "vo",
        "Volapük",
        "Volapük"
      ],
      [
        "wa",
        "Walloon",
        "walon"
      ],
      [
        "wo",
        "Wolof",
        "Wollof"
      ],
      [
        "xh",
        "Xhosa",
        "isiXhosa"
      ],
      [
        "yi",
        "Yiddish",
        "ייִדיש"
      ],
      [
        "yo",
        "Yoruba",
        "Yorùbá"
      ],
      [
        "za",
        "Zhuang",
        "Saɯ cueŋƅ"
      ],
      [
        "zh",
        "Chinese",
        "中文"
      ],
      [
        "zu",
        "Zulu",
        "isiZulu"
      ],
      [
        "ast",
        "Asturian",
        "Asturianu"
      ],
      [
        "ckb",
        "Sorani (Kurdish)",
        "سۆرانی"
      ],
      [
        "cnr",
        "Montenegrin",
        "crnogorski"
      ],
      [
        "jbo",
        "Lojban",
        "la .lojban."
      ],
      [
        "kab",
        "Kabyle",
        "Taqbaylit"
      ],
      [
        "kmr",
        "Kurmanji (Kurdish)",
        "Kurmancî"
      ],
      [
        "ldn",
        "Láadan",
        "Láadan"
      ],
      [
        "lfn",
        "Lingua Franca Nova",
        "lingua franca nova"
      ],
      [
        "sco",
        "Scots",
        "Scots"
      ],
      [
        "sma",
        "Southern Sami",
        "Åarjelsaemien Gïele"
      ],
      [
        "smj",
        "Lule Sami",
        "Julevsámegiella"
      ],
      [
        "szl",
        "Silesian",
        "ślůnsko godka"
      ],
      [
        "tok",
        "Toki Pona",
        "toki pona"
      ],
      [
        "zba",
        "Balaibalan",
        "باليبلن"
      ],
      [
        "zgh",
        "Standard Moroccan Tamazight",
        "ⵜⴰⵎⴰⵣⵉⵖⵜ"
      ]
    ],
  };

  const json = JSON.stringify(state);
  if (window.location.pathname !== '/prepare.html') document.getElementById('initial-state').textContent = json;
  localStorage.setItem("initial_state", json);
  if (window.location.pathname === '/prepare.html') window.location.href = '/';
}