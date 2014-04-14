define(function(require, exports, module) {
	var Engine = require('famous/core/Engine');
	var AppView = require('app/AppView');
    var StateModifier   = require('famous/modifiers/StateModifier');
    var Modifier   = require('famous/core/Modifier');

	var mainContext = Engine.createContext();

	var appView = new AppView();

	var test = navigator.userAgent.toLowerCase();
	if (test.indexOf("android") > -1) {
		mainContext.setPerspective(1000);
	}

    var deviceBox = new Modifier({size: [320,544]});


	mainContext.add(deviceBox).add(appView);
});