var icecream = {
    _icecream: [],
    repeat: 500,

    x: 0,
    y: game.groundLayer,
    radius: 15,

    sprite: new Sprite(image, 1021, 116, 43, 60),

    reset: function () {
        this._icecream = [];
    },

    isHit: function(icecreamX, icecreamY) {
        var x = (penguin.targetX - icecreamX) * (penguin.targetX - icecreamX);
        var y = (penguin.y - icecreamY) * (penguin.y - icecreamY);
        var r = (this.radius + penguin.radius) * (this.radius + penguin.radius);

        if (x + y <= r) {
            return true;
        }
        return false;
    },

    update: function() {

        if (game.frames % this.repeat === 0) {
            var _x = game.width + (this.sprite.width + 200 * Math.random());
            this._icecream.push({
                x: _x,
                y: game.groundLayer - 100,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._icecream.length; i < length; i++) {
            this._icecream[i].x -= game.speed;

            if (this.isHit(this._icecream[i].x + 20, this.y - 70)) {
                penguin.message = 'НЯМ!';
                //console.log('HIT SNOWDRIFT');
            }

            if (this._icecream[i].x < -50) {
                this._icecream.splice(i, 1);
                i--;
                length--;
            }
        }
    },

    render: function(context) {
        for (var i = 0, length = this._icecream.length; i < length; i++) {
            this.sprite.draw(context, this._icecream[i].x, this._icecream[i].y);
            // context.beginPath();
            // context.arc(this._icecream[i].x+20, this.y - 70, this.radius, 0, 2*Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'yellow';
            // context.stroke();
            // context.closePath();
        }
    }
};