/*globals require*/
require.config({
    shim: {

    },
    paths: {
        app: '../Example_Interesting_app/',
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        'famous-polyfills': '../lib/famous-polyfills/index'
    }
});
require(['Example_Interesting_main']);
