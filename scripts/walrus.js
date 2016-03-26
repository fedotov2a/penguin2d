/**
* Объект "Морж".
*
* Содержит описание и поведение Моржа в игре.
* @constructor
*/
var walrus = {
    _walrus: [],
    repeat: 1627,

    x: 0,
    y: game.groundLayer,

    targetX: 45,
    targetY: 5,
    radius: 40,

    speed: 5,

    sprite: new Sprite(image, 1268, 630, 133, 142),

    /**
    * Очищает массив объектов "Морж".
    *
    */
    reset: function () {
        this._walrus = [];
    },

    /**
    * Обновляет положение объекта "Морж" в игре.
    *
    */
    update: function() {
        if (game.frames % this.repeat === 0) {
            this.x = game.width + (this.sprite.width + 503 * Math.random());
            this._walrus.push({
                x: walrus.x,
                y: game.groundLayer - 60,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._walrus.length; i < length; i++) {
            this._walrus[i].x -= game.speed + this.speed;

            if (penguin.isHit(this._walrus[i].x + this.targetX, this.y + this.targetY, this.radius)) {
                if (!penguin.isGodMode) {
                    document.getElementById('hitWalrus').play();
                    penguin.isHurt = true;
                    healthBar.isHitEnemy = true;

                    this._walrus.splice(i, 1);
                    i--;
                    length--;
                    continue;
                }
            }

            if (this._walrus[i].x < -70) {
                this._walrus.splice(i, 1);
                i--;
                length--;
            }
        }
    },

    /**
    * Отрисовывает объект "Морж" в игре.
    *
    * @param {CanvasRenderingContext2D} context место для рисования.
    */
    render: function(context) {
        for (var i = 0, length = this._walrus.length; i < length; i++) {
            this.sprite.draw(context, this._walrus[i].x, this._walrus[i].y);
            // context.beginPath();
            // context.arc(this._walrus[i].x + this.targetX, this.y + this.targetY, this.radius, 0, 2*Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'green';
            // context.stroke();
            // context.closePath();
        }
    }
};