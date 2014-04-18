define(function(require, exports, module) {
    var Surface         = require('famous/core/Surface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var View            = require('famous/core/View');
    var GridLayout      = require("famous/views/GridLayout");
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var Random = require('famous/math/Random');
    var Easing        = require('famous/transitions/Easing');
    var Lightbox      = require('famous/views/Lightbox');
    var IconMenuView    = require('app/IconMenuView');
    var GenericContentPage  = require('app/GenericContentPage');
    var FlipperSasmple  = require('app/FlipperSample');

    var lightboxOptions = {
        inOpacity: 1,
        outOpacity: 1,
        inTransform: Transform.translate(320,0, 0),
        outTransform: Transform.translate(-320, 0, 1),
        inTransition: { duration: 400, curve: Easing.outBack },
        outTransition: { duration: 150, curve: Easing.easeOut }
    };

    //Todo: better looking generic page
    //Todo: Header, Back Button, Close Button
    //Todo: Sample Apps
    //Ionic like header
    //Ionic like footer

    function AppLuncherView() {
        View.apply(this, arguments);
        this._apps = {
            '0': new FlipperSasmple(),
        };

        this.layout = new HeaderFooterLayout({
            headerSize: 50,
            footerSize: 50
        });

        this.header = new Surface({
            size: [undefined, undefined],
            content: "Header",
            classes: ["red-bg"],
            properties: {
                lineHeight: "50px",
                textAlign: "center"
            }
        });

        this.layout.header.add(this.header);

        this.layout.footer.add(new Surface({
            size: [undefined, 50],
            content: "Footer",
            classes: ["red-bg"],
            properties: {
                lineHeight: "50px",
                textAlign: "center"
            }
        }));

        this._add(this.layout);

        this.lightbox = new Lightbox(lightboxOptions);
        this.layout.content.add(this.lightbox);

        this.iconMenuView = new IconMenuView();
        this.iconMenuView.pipe(this._eventInput);
        this.showMenu();

        this._eventInput.on('app', function (event) {
            this.startApp(event.id);
        }.bind(this));

        this._eventInput.on('close', function () {
            this.showMenu();
        }.bind(this));

        this.header.on("click", function() {
            this.showMenu();
        }.bind(this));

    }

    AppLuncherView.DEFAULT_OPTIONS = {
        duration: 300,
        width: 320,
        height: 544
    };

    AppLuncherView.prototype = Object.create(View.prototype);
    AppLuncherView.prototype.constructor = AppLuncherView;

    AppLuncherView.prototype.startApp = function startApp(id) {
        console.log('Start App '+id);

        //lazy create surface, just example
        if (!(id in this._apps)) {
            this._apps[id] = new GenericContentPage();
            console.log("Page not found - so created "+id);

            this._apps[id].pipe(this._eventInput);
        }

        var app = this._apps[id];
        // now need to show it
        this.lightbox.show(app);
    };

    AppLuncherView.prototype.showMenu = function() {
        console.log('Show Menu');
        this.lightbox.show(this.iconMenuView);
        this.iconMenuView.animate();
    };


    module.exports = AppLuncherView;
});