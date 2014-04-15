/**
 * Created by Muly on 4/14/2014.
 */
define(function(require, exports, module) {
    var View            = require('famous/core/View');
    var Surface         = require('famous/core/Surface');

    function GenericContentPage() {
        View.apply(this, arguments);

        this.surf = new Surface({
            content: "Hello",
            properties: {
                backgroundColor: 'orange'
            }
        });

        this._add(this.surf);

        this.surf.on("click", function() {
            console.log("Close event");
            this.close();
        }.bind(this));
    }

    GenericContentPage.prototype = Object.create(View.prototype);
    GenericContentPage.prototype.constructor = GenericContentPage;

    GenericContentPage.prototype.close = function() {
        console.log("Close GenericContentPage");
        this._eventOutput.emit("close");
    };

    module.exports = GenericContentPage;
});

