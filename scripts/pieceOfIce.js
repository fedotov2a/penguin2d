/**
* Объект "Льдинка".
*
* Содержит описание и поведение Льдинки в игре.
*
* @constructor
*/
var pieceOfIce = {
    _pieceOfIce: [],
    repeat: 3600,

    x: 0,
    y: game.groundLayer,

    targetX: 25,
    targetY: 30,
    radius: 26,

    sprite: new Sprite(image, 836, 710, 61, 61),

    /**
    * Очищает массив объектов "Льдинка".
    *
    */
    reset: function () {
        this._pieceOfIce = [];
    },

    /**
    * Обновляет положение объекта "Льдинка" в игре.
    *
    */
    update: function() {
        if (game.frames % this.repeat === 0) {
            var _x = game.width + (this.sprite.width + 500 * (Math.random() + 1));
            this._pieceOfIce.push({
                x: _x,
                y: game.groundLayer - 140,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._pieceOfIce.length; i < length; i++) {
            this._pieceOfIce[i].x -= game.speed;

            if (penguin.isHit(this._pieceOfIce[i].x + this.targetX, this._pieceOfIce[i].y + this.targetY, this.radius)) {
                if (menu.muteOn) {
                    document.getElementById('ice').play();
                }
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

    /**
    * Отрисовывает объект "Льдинка" в игре.
    *
    * @param {CanvasRenderingContext2D} context место для рисования.
    */
    render: function(context) {
        for (var i = 0, length = this._pieceOfIce.length; i < length; i++) {
            this.sprite.draw(context, this._pieceOfIce[i].x, this._pieceOfIce[i].y);
            // context.beginPath();
            // context.arc(this._pieceOfIce[i].x + this.targetX, this._pieceOfIce[i].y + this.targetY, this.radius, 0, 2 * Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'yellow';
            // context.stroke();
            // context.closePath();
        }
    }
};