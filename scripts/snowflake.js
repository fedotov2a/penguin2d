var snowflake = {
    _snowflake: [],
    repeat: 600,

    x: 0,
    y: game.groundLayer,

    targetX: 28,
    targetY: -70,
    radius: 26,

    sprite: new Sprite(image, 1069, 116, 62, 62),

    reset: function () {
        this._snowflake = [];
    },

    isHit: function(snowflakeX, snowflakeY) {
        var x = (penguin.targetX - snowflakeX) * (penguin.targetX - snowflakeX);
        var y = (penguin.y + penguin.targetY - snowflakeY) * (penguin.y + penguin.targetY - snowflakeY);
        var r = (this.radius + penguin.radius) * (this.radius + penguin.radius);

        if (x + y <= r) {
            return true;
        }
        return false;
    },

    update: function() {

        if (game.frames % this.repeat === 0) {
            var _x = game.width + (this.sprite.width + 200 * Math.random());
            this._snowflake.push({
                x: _x,
                y: game.groundLayer - 100,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._snowflake.length; i < length; i++) {
            this._snowflake[i].x -= game.speed;

            if (this.isHit(this._snowflake[i].x + this.targetX, this.y + this.targetY)) {
                penguin.message = 'ХВАТЬ!';
                //console.log('HIT SNOWDRIFT');
                this._snowflake.splice(i, 1);
                i--;
                length--;
                continue;
            }

            if (this._snowflake[i].x < -50) {
                this._snowflake.splice(i, 1);
                i--;
                length--;
            }
        }
    },

    render: function(context) {
        for (var i = 0, length = this._snowflake.length; i < length; i++) {
            this.sprite.draw(context, this._snowflake[i].x, this._snowflake[i].y);
            // context.beginPath();
            // context.arc(this._snowflake[i].x + this.targetX, this.y + this.targetY, this.radius, 0, 2 * Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'yellow';
            // context.stroke();
            // context.closePath();
        }
    }
};