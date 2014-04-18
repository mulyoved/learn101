/**
 * Created by Muly on 4/14/2014.
 */
define(function(require, exports, module) {
    var View            = require('famous/core/View');
    var ImageSurface = require("famous/surfaces/ImageSurface");
    var Flipper         = require('famous/views/Flipper');

    function FlipperSasmple() {
        View.apply(this, arguments);

        this.flipper = new Flipper();

        var side1 = new ImageSurface({
            size: [200, 200]
        });
        side1.setContent("img/icon-menu/art.png");

        var side2 = new ImageSurface({
            size: [200, 200]
        });
        side2.setContent("img/icon-menu/bike.png");

        side1.on("click", function() {
            console.log("Side1 click - flip");
            this.flipper.flip();
        }.bind(this));

        side2.on("click", function() {
            console.log("Side2 click - flip");
            this.flipper.flip();
        }.bind(this));

        this.flipper.frontNode = side1;
        this.flipper.backNode = side2;

        this._add(this.flipper);
    }

    FlipperSasmple.prototype = Object.create(View.prototype);
    FlipperSasmple.prototype.constructor = FlipperSasmple;

    module.exports = FlipperSasmple;
});

