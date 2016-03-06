var pieceOfIce = {
    _pieceOfIce: [],
    repeat: 900,

    x: 0,
    y: game.groundLayer,

    targetX: 25,
    targetY: -70,
    radius: 26,

    sprite: new Sprite(image, 1136, 116, 48, 60),

    reset: function () {
        this._pieceOfIce = [];
    },

    isHit: function(pieceOfIceX, pieceOfIceY) {
        var x = (penguin.targetX - pieceOfIceX) * (penguin.targetX - pieceOfIceX);
        var y = (penguin.y + penguin.targetY - pieceOfIceY) * (penguin.y + penguin.targetY - pieceOfIceY);
        var r = (this.radius + penguin.radius) * (this.radius + penguin.radius);

        if (x + y <= r) {
            return true;
        }
        return false;
    },

    update: function() {

        if (game.frames % this.repeat === 0) {
            var _x = game.width + (this.sprite.width + 200 * Math.random());
            this._pieceOfIce.push({
                x: _x,
                y: game.groundLayer - 100,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._pieceOfIce.length; i < length; i++) {
            this._pieceOfIce[i].x -= game.speed;

            if (this.isHit(this._pieceOfIce[i].x + this.targetX, this.y + this.targetY)) {
                penguin.isGodMode = true;
                this._pieceOfIce.splice(i, 1);
                i--;
                length--;
                continue;
            }

            if (this._pieceOfIce[i].x < -50) {
                this._pieceOfIce.splice(i, 1);
                i--;
                length--;
            }
        }
    },

    render: function(context) {
        for (var i = 0, length = this._pieceOfIce.length; i < length; i++) {
            this.sprite.draw(context, this._pieceOfIce[i].x, this._pieceOfIce[i].y);
            // context.beginPath();
            // context.arc(this._pieceOfIce[i].x + this.targetX, this.y + this.targetY, this.radius, 0, 2 * Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'yellow';
            // context.stroke();
            // context.closePath();
        }
    }
};