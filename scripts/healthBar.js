var healthBar = {
    isHitEnemy: false,
    isHitIcecream: false,

    sprite: [
        new Sprite(image, 1021, 116, 43, 60),
        new Sprite(image, 1021, 116, 43, 60),
        new Sprite(image, 1021, 116, 43, 60)
    ],

    update: function() {
        if (this.isHitEnemy) {
            this.sprite.splice(this.sprite.length - 1, 1);
            this.isHitEnemy = false;
            if (this.sprite.length === 0) {
                penguin.isDie = true;
            }
        } else if (this.isHitIcecream) {
            if (this.sprite.length < 3) {
                this.sprite.splice(this.sprite.length, 0, new Sprite(image, 1021, 116, 43, 60));
            }
            this.isHitIcecream = false;
        }
    },

    render: function(context) {
        for (var i = 0, length = this.sprite.length; i < length; i++) {
            this.sprite[i].draw(context, 20 + i * 20, 20);
        }
    }
};