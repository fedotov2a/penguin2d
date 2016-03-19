/**
* Объект "Мороженое".
*
* Содержит описание и поведение Мороженого в игре.
* 
* @constructor
*/
var icecream = {
    _icecream: [],
    repeat: 1000,

    x: 0,
    y: game.groundLayer,

    targetX: 23,
    targetY: -70,
    radius: 18,

    sprite: new Sprite(image, 1226, 711, 43, 60),

    /**
    * Очищает массив объектов "Мороженое".
    *
    */
    reset: function () {
        this._icecream = [];
    },

    /**
    * Обновляет положение объекта "Мороженое" в игре.
    *
    */
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

            if (penguin.isHit(this._icecream[i].x + this.targetX, this.y + this.targetY, this.radius)) {
                healthBar.isHitIcecream = true;
                this._icecream.splice(i, 1);
                i--;
                length--;
                continue;
            }

            if (this._icecream[i].x < -50) {
                this._icecream.splice(i, 1);
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
        for (var i = 0, length = this._icecream.length; i < length; i++) {
            this.sprite.draw(context, this._icecream[i].x, this._icecream[i].y);
            // context.beginPath();
            // context.arc(this._icecream[i].x + this.targetX, this.y + this.targetY, this.radius, 0, 2*Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'yellow';
            // context.stroke();
            // context.closePath();
        }
    }
};