/**
 * Created by Muly on 4/13/2014.
 */
define(function(require, exports, module) {
    'use strict';
    // import dependencies

    console.log("requierJSTest - Main.js");
    console.log("requier", require);
    console.log("exports", exports);
    console.log("module", module);

    var Play = require('requireJs/subModule');
    Play();

    var func = require('requireJs/subFunctions');
    func.func1();
    func.func2();

    document.getElementById("btn1").onclick = func.func1;
    document.getElementById("btn2").onclick = func.func2;

    // Sample fof create object
    var BaseObject = require('requireJs/subBaseObject');
    var baseObject = new BaseObject();
    baseObject.func1();

    //Got it from http://geekswithblogs.net/shaunxu/archive/2013/12/12/bind-call-and-apply-in-javascript-function.aspx
    //The only different between "call" and "apply" is, you can pass parameters for following
    //arguments to "call", while you can pass parameters as an array to "apply".
    document.getElementById("btn3").onclick = function() { baseObject.func1.call(baseObject) };
    document.getElementById("btn4").onclick = baseObject.func2;
    document.getElementById("btn4.1").onclick = baseObject.func2.bind(baseObject);

    // Sample of create inherited object
    var InheritedObject = require('requireJs/subInheritedObject');
    var inheritedObject = new InheritedObject();

    document.getElementById("btn5").onclick = inheritedObject.func1.bind(inheritedObject);
    document.getElementById("btn6").onclick = inheritedObject.func2.bind(inheritedObject);
    document.getElementById("btn7").onclick = inheritedObject.func3.bind(inheritedObject);
    document.getElementById("btn8").onclick = inheritedObject.func4.bind(inheritedObject);

    for (var i=0; i<2; i++) {
        console.log('Loop: '+i);

        document.getElementById("btn_wrong_closure"+(i+1)).onclick = function() { console.log('Wrong: ' + (i+1)); };

        (function (id) {
            document.getElementById("btn_right_closure"+(i+1)).onclick = function() { console.log('Wrong: ' + (id+1)); };
        })(i);
    }
});