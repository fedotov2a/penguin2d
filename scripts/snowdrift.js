/**
* Объект "Сугроб".
*
* Содержит описание и поведение Сугроба в игре.
*
* @constructor
*/
var snowdrift = {
    _snowdrift: [],
    repeat: 1301,

    x: 0,
    y: game.groundLayer,

    targetX: 57,
    targetY: 25,
    radius: 40,

    sprite: new Sprite(image, 969, 358, 110, 110),

    /**
    * Очищает массив объектов "Сугроб".
    *
    */
    reset: function () {
        this._snowdrift = [];
    },

    /**
    * Обновляет положение объекта "Сугроб" в игре.
    *
    */
    update: function() {
        if (game.frames % this.repeat === 0) {
            var _x = game.width + (this.sprite.width + 200 * Math.random());
            this._snowdrift.push({
                x: _x,
                y: game.groundLayer - 45,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._snowdrift.length; i < length; i++) {
            this._snowdrift[i].x -= game.speed;

            if (penguin.isHit(this._snowdrift[i].x + this.targetX, this.y + this.targetY, this.radius)) {
                if (!penguin.isGodMode) {
                    penguin.isHurt = true;
                    healthBar.isHitEnemy = true;

                    this._snowdrift.splice(i, 1);
                    i--;
                    length--;
                    continue;
                }
            }

            if (this._snowdrift[i].x < -70) {
                this._snowdrift.splice(i, 1);
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
        for (var i = 0, length = this._snowdrift.length; i < length; i++) {
            this.sprite.draw(context, this._snowdrift[i].x, this._snowdrift[i].y);
            // context.beginPath();
            // context.arc(this._snowdrift[i].x + this.targetX, this.y + this.targetY, this.radius, 0, 2 * Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'yellow';
            // context.stroke();
            // context.closePath();
        }
    }
};