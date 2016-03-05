var healthBar = {
    sprite: [
        new Sprite(image, 1021, 116, 43, 60),
        new Sprite(image, 1021, 116, 43, 60),
        new Sprite(image, 1021, 116, 43, 60)
    ],

    update: function() {
    },

    render: function(context) {
        for (var i = 0, length = this.sprite.length; i < length; i++) {
            this.sprite[i].draw(context, 20 + i * 20, 20);
        }
    }
};