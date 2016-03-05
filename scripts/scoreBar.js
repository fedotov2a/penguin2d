var scoreBar = {
    score: 0,
    sprite: new Sprite(image, 1069, 116, 62, 62),

    update: function() {
    },

    render: function(context) {
        this.sprite.draw(context, 630, 20);
    }
};