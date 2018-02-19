const prerenderer = require('simple-react-prerender')

// if your store initializer needs babel
require('babel-register')({
    plugins: [
        'transform-es2015-modules-commonjs',
        'syntax-object-rest-spread',
        'transform-object-rest-spread',
    ],
})

// provide simple window mock if you use the redux dev-tools
window = {}

// create the store
prerenderer({
    html: '/Users/carpereira/Sites/react/drupal-react-blog/public/index.html',
    app: '/Users/carpereira/Sites/react/drupal-react-blog/src/rootProvider.js',
    // pass the store to the provider app
})
