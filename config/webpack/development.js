process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig({
    purge: [
        "./app/**/*.html.erb",
        "./app/javascript/**/*.vue",
    ],
})
