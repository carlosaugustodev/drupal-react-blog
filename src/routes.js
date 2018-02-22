const routes = module.exports = require('next-routes')()

routes
.add('home', '/:lng', 'index')
.add('article', '/post/:id', 'index')
.add('pages', '/pages/:id', 'index')