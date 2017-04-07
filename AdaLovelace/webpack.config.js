module.exports = {
    entry: {
        main: './frontend/js/main.js'
    },
    output: {
        path: __dirname + '/wwwroot/js',
        filename: '[name].js'
    },
    module: {
        loaders: []
    },
    resolve: {
        extensions: ['*', '.js']
    }
};