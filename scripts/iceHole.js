/**
* Объект "Прорубь".
*
* Содержит описание и поведение Проруби в игре.
*
* @constructor
*/
var iceHole = {
    _iceHole: [],
    repeat: 907,

    x: 0,
    y: game.groundLayer,

    targetX: 50,
    targetY: 90,
    radius: 60,

    sprite: new Sprite(image, 1076, 744, 105, 25),

    /**
    * Очищает массив объектов "Прорубь".
    *
    */
    reset: function () {
        this._iceHole = [];
    },

    /**
    * Обновляет положение объекта "Сугроб" в игре.
    *
    */
    update: function() {
        if (game.frames % this.repeat === 0) {
            var _x = game.width + (this.sprite.width + 250 * Math.random());
            this._iceHole.push({
                x: _x,
                y: game.groundLayer + 40,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._iceHole.length; i < length; i++) {
            this._iceHole[i].x -= game.speed;

            if (penguin.isHit(this._iceHole[i].x + this.targetX, this.y + this.targetY, this.radius)) {
                if (!penguin.isGodMode) {
                    document.getElementById('iceHole').play();
                    penguin.isHurt = true;
                    penguin.isFell = true;
                    healthBar.isHitEnemy = true;

                    this._iceHole.splice(i, 1);
                    i--;
                    length--;
                    continue;
                }
            }

            if (this._iceHole[i].x < -70) {
                this._iceHole.splice(i, 1);
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
        for (var i = 0, length = this._iceHole.length; i < length; i++) {
            this.sprite.draw(context, this._iceHole[i].x, this._iceHole[i].y);
            // context.beginPath();
            // context.arc(this._iceHole[i].x + this.targetX, this.y + this.targetY, this.radius, 0, 2 * Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'blue';
            // context.stroke();
            // context.closePath();
        }
    }
};