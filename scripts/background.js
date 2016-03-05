var background = {
    position: 0,
    sprite: new Sprite(image, 0, 0, 720, 480),

    update: function() {
        this.position = (this.position - game.speed) % this.sprite.width;
    },

    render: function(context) {
        this.sprite.draw(context, this.position, 0);
        this.sprite.draw(context, this.position + this.sprite.width, 0);
    }
};