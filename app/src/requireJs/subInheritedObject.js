/**
 * Created by Muly on 4/13/2014.
 */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var BaseObject = require('requireJs/subBaseObject');

    function InheritedObject() {
        BaseObject.apply(this);

        this.msgPostfix = ':Inherited';
        console.log("In Inherited object constructor - " + this.msgPostfix);
    }

    //why this is needed?
    InheritedObject.prototype = Object.create(BaseObject.prototype);
    //why this is needed?
    InheritedObject.prototype.constructor = InheritedObject;

    InheritedObject.prototype.func1 = function() {
        console.log(this.msgPrefix + "InheritedObject - Func1 "+this.msgPostfix);
    };

    InheritedObject.prototype.func2 = function() {
        console.log(this.msgPrefix + "InheritedObject - Func2 "+this.msgPostfix);
        BaseObject.prototype.func2.call(this);
    };

    InheritedObject.prototype.func3 = function() {
        console.log(this.msgPrefix + "InheritedObject - Func3 "+this.msgPostfix);
    };

    InheritedObject.prototype.func4 = function() {
        console.log(this.msgPrefix + "InheritedObject - Func3 "+this.msgPostfix);

        func_base_4();
    };

    module.exports = InheritedObject;
});