// next-i18next.config.js
const ChainedBackend = require('i18next-chained-backend')
const FSBackend = require('i18next-fs-backend/cjs')
const HttpBackend = require('i18next-http-backend/cjs')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  backend: {
    backends: [
      FSBackend,
      HttpBackend
    ],
    backendOptions: [{ // make sure public/locales_cache/en and public/locales_cache/de exists
      loadPath: './public/locales_cache/{{lng}}/{{ns}}.json',
      addPath: './public/locales_cache/{{lng}}/{{ns}}.json',
      expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
    }, {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }]
  },
  use: [ChainedBackend],
  ns: ['common'], // the namespaces needs to be listed here, to make sure they got preloaded
  serializeConfig: false, // because of the custom use i18next plugin
  // debug: true,
}