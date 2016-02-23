var snowdrift = {
    _snowdrift: [],
    repeat: 241,

    x: 0,
    y: game.groundLayer,
    radius: 15,

    sprite: new Sprite(image, 721, 65, 33, 33),

    reset: function () {
        this._snowdrift = [];
    },

    isHit: function(snowdriftX, snowdriftY) {
        var x = (penguin.targetX - snowdriftX) * (penguin.targetX - snowdriftX);
        var y = (penguin.y - snowdriftY) * (penguin.y - snowdriftY);
        var r = (this.radius + penguin.radius) * (this.radius + penguin.radius);

        if (x + y <= r) {
            return true;
        }
        return false;
    },

    update: function() {

        if (game.frames % this.repeat === 0) {
            var _x = game.width + (this.sprite.width + 200 * Math.random());
            this._snowdrift.push({
                x: _x,
                y: game.groundLayer,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._snowdrift.length; i < length; i++) {
            this._snowdrift[i].x -= game.speed;

            if (this.isHit(this._snowdrift[i].x + 20, this.y + 15)) {
                penguin.message = 'ОЙ!';
                //console.log('HIT SNOWDRIFT');
            }

            if (this._snowdrift[i].x < -50) {
                this._snowdrift.splice(i, 1);
                i--;
                length--;
            }
        }
    },

    render: function(context) {
        for (var i = 0, length = this._snowdrift.length; i < length; i++) {
            this.sprite.draw(context, this._snowdrift[i].x, this._snowdrift[i].y);
            // context.beginPath();
            // context.arc(this._snowdrift[i].x+20, this.y+15, this.radius, 0, 2*Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'yellow';
            // context.stroke();
            // context.closePath();
        }
    }
};