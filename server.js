// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const routes = require('./src/routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src' })
const handle = routes.getRequestHandler(app)

const express = require('express')
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');
const i18n = require('./src/libs/i18n');


// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    preload: ['en', 'pt'], // preload all langages
    ns: ['common'], // need to preload all the namespaces
    backend: {
      loadPath: __dirname + '/src/locales/{{lng}}/{{ns}}.json',
      addPath: __dirname + '/src/locales/{{lng}}/{{ns}}.missing.json'
    },
  detection: {
      order: ['path', 'session', 'querystring', 'cookie', 'header']
  }
  }, () => {
    app.prepare().then(() => {

      var server = express();

      server.use(i18nextMiddleware.handle(i18n));

      // serve locales for client
      server.use('/locales', express.static(__dirname + '/locales'))

      // missing keys
      server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n));

      server.get('*', (req, res) => {
        //req.i18n.changeLanguage('en');
        const parsedUrl = parse(req.url, true)
        const {pathname, query} = parsedUrl
        handle(req, res, parsedUrl)
      })


      server.listen(3000, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
      })
    })

  });

