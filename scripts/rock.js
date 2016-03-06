var rock = {
    _rock: [],
    repeat: 100,

    x: 0,
    y: game.groundLayer,

    targetX: 48,
    targetY: 18,
    radius: 47,

    sprite: new Sprite(image, 1095, 361, 110, 110),

    reset: function () {
        this._rock = [];
    },

    isHit: function(rockX, rockY) {
        var x = (penguin.targetX - rockX) * (penguin.targetX - rockX);
        var y = (penguin.y + penguin.targetY - rockY) * (penguin.y + penguin.targetY - rockY);
        var r = (this.radius + penguin.radius) * (this.radius + penguin.radius);

        if (x + y <= r) {
            return true;
        }
        return false;
    },

    update: function() {
        if (game.frames % this.repeat === 0) {
            this.x = game.width + (this.sprite.width + 500 * Math.random());
            this._rock.push({
                x: rock.x,
                y: game.groundLayer - 40,
                width: this.sprite.width,
                height: this.sprite.height
            });
        }

        for (var i = 0, length = this._rock.length; i < length; i++) {
            this._rock[i].x -= game.speed;

            if (this.isHit(this._rock[i].x + this.targetX, this.y + this.targetY)) {
                penguin.isHurt = true;
                healthBar.isHitEnemy = true;
                this._rock.splice(i, 1);
                i--;
                length--;
                continue;
            }

            if (this._rock[i].x < -70) {
                this._rock.splice(i, 1);
                i--;
                length--;
            }
        }
    },

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