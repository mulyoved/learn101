define(function(require /*, exports, module*/) {
    var Engine          = require('famous/core/Engine');
    var AppView         = require('app/AppView');
    var StateModifier   = require('famous/modifiers/StateModifier');
    require('famous/inputs/FastClick');

    var mainContext = Engine.createContext();

    var appView = new AppView();
    var deviceBox = new StateModifier({size: [320,544]});

    mainContext.add(deviceBox).add(appView);
});