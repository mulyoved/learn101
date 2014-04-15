/**
 * Created by Muly on 4/13/2014.
 */
define(function(require, exports, module) {
    'use strict';
    // import dependencies

    function BaseObject() {
        this.msgPostfix = ':BASE';
        this.msgPrefix = 'BASE:';
        console.log(this.msgPrefix + "In Base object constructor - " + this.msgPostfix);
    }

    BaseObject.prototype.func1 = function() {
        console.log(this.msgPrefix + "BaseObject - Func1" + this.msgPostfix);
    };

    BaseObject.prototype.func2 = function() {
        console.log(this.msgPrefix + "BaseObject - Func2" + this.msgPostfix);
    };

    /*
    BaseObject.prototype.func_base_4 = function() {
        console.log(this.msgPrefix + "BaseObject - Func4" + this.msgPostfix);
    };
    */
    
    module.exports = BaseObject;
});