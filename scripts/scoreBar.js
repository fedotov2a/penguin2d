var scoreBar = {
    score: 0,
    sprite: new Sprite(image, 1069, 116, 62, 62),

    render: function(context) {
        this.sprite.draw(context, 630, 20);
        context.beginPath();
        context.font = '40pt Calibri';
        context.fillStyle = 'blue';
        if (this.score === 0) {
            context.fillText(this.score + " x", 550, 65);
        }
        context.fillText(this.score + " x", 550 - Math.ceil((Math.log(this.score) / Math.log(10))) * 5, 65);
        context.closePath();
    }
};