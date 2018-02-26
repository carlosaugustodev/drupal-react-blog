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
                    use: ['style-loader','css-loader', 'sass-loader']
                }
            );    
        } else {
            config.module.rules.push(

                {
                    test: /\.scss$/,
                    use: ['css-loader', 'sass-loader']
                }
            );   
        }
        
        return config;
    },
    distDir: '../build'
};