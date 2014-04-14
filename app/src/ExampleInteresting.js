/*globals require*/
require.config({
    shim: {

    },
    paths: {
        app: '../ExampleInteresting/',
        famous: '../lib/famous',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        'famous-polyfills': '../lib/famous-polyfills/index'
    }
});
require(['./app/main']);
