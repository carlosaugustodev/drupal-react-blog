const routes = module.exports = require('next-routes')()

routes
.add('qualquer coisa', '/', 'index')
.add('article', '/post/:id', 'article')