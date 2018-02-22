const path = require('path');
const glob = require('glob');
// const withSass = require('@zeit/next-sass')
// module.exports = withSass()




module.exports = {
    webpack: (config) => {
        config.module.rules.push(

            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            }
        );
        return config;
    },
    distDir: '../build'
};