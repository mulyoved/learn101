define(function(require /*, exports, module*/) {
    var Engine          = require('famous/core/Engine');
    var Modifier        = require('famous/core/Modifier');
    var StateModifier   = require('famous/modifiers/StateModifier');
    require('famous/inputs/FastClick');

    var AppLuncherView = require('app/AppLuncherView');

    var mainContext = Engine.createContext();

    var appLuncherView = new AppLuncherView();

    var deviceBox = new Modifier({size: [320,544]});
    var devicePos = new Modifier({origin: [0.5,0.5]});
    mainContext.add(devicePos).add(deviceBox).add(appLuncherView);


    //iconMenuView.reset();
});