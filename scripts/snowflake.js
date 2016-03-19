/**
* Объект "Снежинка".
*
* Содержит описание и поведение Снежинки в игре.
*
* @constructor
*/
var snowflake = {
    _snowflake: [],
    repeat: 500,

    x: 0,
    y: game.groundLayer,

    targetX: 28,
    targetY: -70,
    radius: 26,

    sprite: new Sprite(image, 898, 711, 60, 60),

    /**
    * Очищает массив объектов "Мороженое".
    *
    */
    reset: function () {
        this._snowflake = [];
    },

    /**
    * Обновляет положение объекта "Мороженое" в игре.
    *
    */
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

            if (penguin.isHit(this._snowflake[i].x + this.targetX, this.y + this.targetY, this.radius)) {
                scoreBar.score += 10;
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

    /**
    * Отрисовывает объект "Сугроб" в игре.
    *
    * @param {CanvasRenderingContext2D} context место для рисования.
    */
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