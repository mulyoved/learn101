define(function(require, exports, module) {
    var Surface         = require('famous/core/Surface');
    var Modifier        = require('famous/core/Modifier');
    var Transform       = require('famous/core/Transform');
    var View            = require('famous/core/View');
    var GridLayout      = require("famous/views/GridLayout");
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var Random = require('famous/math/Random');

    function IconMenuView() {
        View.apply(this, arguments);

        //_createBackground.call(this);
        _createStrips.call(this);

        /*
        this._eventOutput.on('app', function(event) {
            console.log('App event');
            this.startApp(event.id)
        })
        */
    }

    IconMenuView.DEFAULT_OPTIONS = {
        duration: 300,
        width: 320,
        height: 544
    };

    IconMenuView.prototype = Object.create(View.prototype);
    IconMenuView.prototype.constructor = IconMenuView;

    function _createBackground() {
        this.filterSurf = new Surface({
            properties: {
                //marginTop: '44px',
                backgroundColor: '#323153'
            }
        });

        this._add(this.filterSurf);
    }

    function _createStrips() {
        var _super = this;
        //create a grid for icons
        var grid = new GridLayout({
            //size:[undefined, undefined],
            dimensions: [3, 3],
            properties: {
                backgroundColor: 'orange'
            }
        });

        var surfaces = [];


        grid.sequenceFrom(surfaces);

        var iconContents = [
            {text: 'ART', imageUrl: 'img/icon-menu/art.png', available: true},
            {text: 'BARCHART', imageUrl: 'img/icon-menu/barchart.png', available: true},
            {text: 'BIKE', imageUrl: 'img/icon-menu/bike.png', available: true},

            {text: 'BLIMP', imageUrl: 'img/icon-menu/blimp.png', available: true},
            {text: 'BOLT', imageUrl: 'img/icon-menu/bolt.png', available: true},
            {text: 'BOMB', imageUrl: 'img/icon-menu/bomb.png', available: true},

            {text: 'BOOKLET', imageUrl: 'img/icon-menu/booklet.png', available: true},
            {text: 'BOOKSHELF', imageUrl: 'img/icon-menu/bookshelf.png', available: true},
            {text: 'BRIEFCASE', imageUrl: 'img/icon-menu/briefcase.png', available: true},
        ];

        this.rowModifiers = [];
        var contentCounter = 0;

        var surf, view, availability;
        var width = IconMenuView.DEFAULT_OPTIONS.width; // window.innerWidth;
        var height = IconMenuView.DEFAULT_OPTIONS.height; // window.innerHeight;

        var scaledWidth = 50*height/320;
        var scaledHeight = 60*height/320;
        for(var row = 0; row < 3; row++) {
            for(var col = 0; col < 3; col++) {
                this.rowModifiers[(row * 3) + col] = new Modifier({
                    size: [scaledWidth, scaledHeight],
                    origin: [0.5, 0.5]
                });
                //create surface from iconContents
                availability = iconContents[contentCounter].available ? 'available' : 'unavailable';

                surf = new Surface({
                    size: [undefined,undefined],
                    classes: ['filterIcon'],
                    content: '<img class="filterIconImg" width="' + scaledWidth + '" src="'+ iconContents[contentCounter].imageUrl +'"/>'+
                        '<div class="filterIconText '+ availability +'">' + iconContents[contentCounter].text +'</div>'
                });

                //var id = contentCounter;

                //Example of closure, notice id must be in the params so it will not hook to some variable
                //http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example
                (function setEvent(id) {
                    surf.on('click', function () {
                        console.log("Icon  Id:" + id);

                        //Need to fire custome even here with id as a parmeter
                        //IconClick id

                        // Document closure in the right page

                        _super._eventOutput.emit('app', {id: id});
                    });
                })(contentCounter);

                //push view (modifier + surface) onto surfaces
                view = new View();
                view._add(this.rowModifiers[(row * 3) + col]).add(surf);
                surfaces.push(view);

                contentCounter++;
            }
        }

        this._add(grid);
    }

    IconMenuView.prototype.animate = function() {
        console.log("Satrt animate menu");

        this.reset();

        /*
        this.titleMod.setTransform(
            Transform.translate(0, 75, 0),
            {duration: this.options.duration - 100, curve: 'easeInOut'});
        */

        var scale = Transform.scale(1, 1, 1);
        var translate = Transform.translate(0, 0, 0);

        for(var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                var idx = row*3+col;
                //var delay = Random.integer(0,150);

                //Time.setTimeout((function() {
                    this.rowModifiers[idx].setTransform(
                        Transform.multiply(translate, scale),
                        {duration: this.options.duration, curve: 'easeInOut'});
                //}).bind(this), delay);

            }
        }
    };

    IconMenuView.prototype.reset = function() {
        var scale = Transform.scale(0.1, 0.1, 0);
        var translate = Transform.translate(0, 50, 0);

        for(var row = 0; row < this.rowModifiers.length; row++) {
            this.rowModifiers[row].setTransform(
                Transform.multiply(translate, scale),
                {duration: 0});
        }
    };

    module.exports = IconMenuView;
});