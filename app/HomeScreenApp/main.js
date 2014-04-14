define(function(require /*, exports, module*/) {
    var Engine          = require('famous/core/Engine');
    var Modifier        = require('famous/core/Modifier');
    var StateModifier   = require('famous/modifiers/StateModifier');
    require('famous/inputs/FastClick');

    var IconMenuView    = require('app/IconMenuView');

    var mainContext = Engine.createContext();

    var iconMenuView = new IconMenuView();

    var deviceBox = new Modifier({size: [320,544]});
    var devicePos = new Modifier({origin: [0.5,0.5]});
    mainContext.add(devicePos).add(deviceBox).add(iconMenuView);


    //iconMenuView.reset();
    iconMenuView.animate();

});