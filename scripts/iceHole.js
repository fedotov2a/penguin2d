var iceHole = {
    _iceHole: [],
    repeat: 569,

    x: 0,
    y: game.groundLayer,
    radius: 15,

    sprite: new Sprite(image, 673, 75, 48, 29),

    reset: function () {
        this._iceHole = [];
    },

    isHit: function(iceHoleX, iceHoleY) {
        var x = (penguin.targetX - iceHoleX) * (penguin.targetX - iceHoleX);
        var y = (penguin.y - iceHoleY) * (penguin.y - iceHoleY);
        var r = (this.radius + penguin.radius) * (this.radius + penguin.radius);

        if (x + y <= r) {
            return true;
        }
        return false;
    },

    update: function() {
        if (game.frames % this.repeat === 0) {
            var _x = game.width + (this.sprite.width + 250 * Math.random());
            this._iceHole.push({
                x: _x,
                y: game.groundLayer,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._iceHole.length; i < length; i++) {
            this._iceHole[i].x -= game.speed;

            if (this.isHit(this._iceHole[i].x + 20, this.y + 15)) {
                penguin.message = 'Ы!';
                //console.log('HIT ICE-HOLE');
            }

            if (this._iceHole[i].x < -50) {
                this._iceHole.splice(i, 1);
                i--;
                length--;
            }
        }
    },

    render: function(context) {
        for (var i = 0, length = this._iceHole.length; i < length; i++) {
            this.sprite.draw(context, this._iceHole[i].x, this._iceHole[i].y);
            // context.beginPath();
            // context.arc(this._iceHole[i].x+20, this.y+15, this.radius, 0, 2*Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'blue';
            // context.stroke();
            // context.closePath();
        }
    }
};