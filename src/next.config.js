const path = require('path');
const glob = require('glob');
// const withSass = require('@zeit/next-sass')
// module.exports = withSass()




module.exports = {
    webpack: (config, options) => {
        const { dev, isServer } = options

        if (!isServer) {
            config.module.rules.push(

                {
                    test: /\.scss$/,
                    include: [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, 'styles')
                    ],
                    use: ['style-loader','postcss-loader', 'sass-loader']
                }
            );    
        } else {
            config.module.rules.push(

                {
                    test: /\.scss$/,
                    use: ['null-loader']
                }
            );
        }
        
        return config;
    },
    distDir: '../build'
};