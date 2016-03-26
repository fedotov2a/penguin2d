/**
* Объект "Камень".
*
* Содержит описание и поведение Камня в игре.
* @constructor
*/
var rock = {
    _rock: [],
    repeat: 500,

    x: 0,
    y: game.groundLayer,

    targetX: 55,
    targetY: 18,
    radius: 47,

    sprite: new Sprite(image, 723, 662, 110, 110),

    /**
    * Очищает массив объектов "Камень".
    *
    */
    reset: function () {
        this._rock = [];
    },

    /**
    * Обновляет положение объекта "Камень" в игре.
    *
    */
    update: function() {
        if (game.frames % this.repeat === 0) {
            this.x = game.width + (this.sprite.width + 200 * (Math.random() + 1));
            this._rock.push({
                x: rock.x,
                y: game.groundLayer - 30,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._rock.length; i < length; i++) {
            this._rock[i].x -= game.speed;

            if (penguin.isHit(this._rock[i].x + this.targetX, this.y + this.targetY, this.radius)) {
                if (!penguin.isGodMode) {
                    document.getElementById('hit').play();
                    penguin.isHurt = true;
                    healthBar.isHitEnemy = true;

                    this._rock.splice(i, 1);
                    i--;
                    length--;
                    continue;
                }
            }

            if (this._rock[i].x < -70) {
                this._rock.splice(i, 1);
                i--;
                length--;
            }
        }
    },

    /**
    * Отрисовывает объект "Камень" в игре.
    *
    * @param {CanvasRenderingContext2D} context место для рисования.
    */
    render: function(context) {
        for (var i = 0, length = this._rock.length; i < length; i++) {
            this.sprite.draw(context, this._rock[i].x, this._rock[i].y);
            // context.beginPath();
            // context.arc(this._rock[i].x + this.targetX, this.y + this.targetY, this.radius, 0, 2*Math.PI, false);
            // context.lineWidth = 1;
            // context.strokeStyle = 'green';
            // context.stroke();
            // context.closePath();
        }
    }
};