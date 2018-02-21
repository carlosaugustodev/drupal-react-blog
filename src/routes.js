const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
.add('article', '/post/:id', 'index')
.add('pages', '/pages/:id', 'index')