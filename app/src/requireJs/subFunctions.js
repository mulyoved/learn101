/**
 * Created by Muly on 4/13/2014.
 */
define(function(require, exports, module) {
    'use strict';
    // import dependencies

    function func1() {
        console.log("Func-1");
    }

    function func2() {
        console.log("Func:2");
    }

    module.exports = {
        func1: func1,
        func2: func2
    }

});