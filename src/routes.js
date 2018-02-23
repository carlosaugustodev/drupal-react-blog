const routes = module.exports = require('next-routes')()

routes
.add('home', '/:lng/', 'index')
.add('article', '/:lng/post/:id', 'index')
.add('pages', '/:lng/pages/:id', 'index')
