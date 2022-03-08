const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
// const datatable =  require('./loaders/datatable')


environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery',
        jquery: 'jquery/src/jquery',
        'window.jQuery': 'jquery/src/jquery',
        Popper: ['popper.js', 'default'], // for Bootstrap 4
    })
)

/**
 * To use jQuery in views
 */
// environment.loaders.append('expose', {
//     test: require.resolve(jQuery),
//     use: [{
//         loader: 'expose-loader',
//         options: '$'
//     }]
// })
// environment.loaders.prepend(datatable)


module.exports = environment