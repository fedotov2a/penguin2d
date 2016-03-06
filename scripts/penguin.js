var penguin = {
    x: 0,
    y: 0,

    sprite: [
        /* animate for motion */
        new Sprite(image, 722, 0, 90, 101),
        new Sprite(image, 812, 0, 90, 101),
        new Sprite(image, 908, 0, 90, 101),
        new Sprite(image, 1000, 0, 90, 101),

        /* animate for jump */
        new Sprite(image, 722, 108, 88, 102),
        new Sprite(image, 815, 108, 98, 99),
        new Sprite(image, 917, 108, 98, 99),

        /* animate for hurt */
        new Sprite(image, 1091, 0, 95, 100),

        /* animate for god mode */
        new Sprite(image, 723, 325, 105, 96),
        new Sprite(image, 841, 344, 120, 79),

        /* animate for fallen */
        new Sprite(image, 722, 218, 88, 100),
        new Sprite(image, 815, 217, 89, 101),
        new Sprite(image, 909, 218, 99, 101),
        new Sprite(image, 1011, 216, 101, 89)
    ],

    frame: 0,
    velocity: 0,
    animationMove: [0, 1, 2, 3],
    animationJump: [4, 5, 6],
    animationHurt: [7, 7],
    animationGodMode: [8, 9, 9, 9],
    animationFallen: [10, 11, 12, 13],
    speedAnimationMove: 15,
    speedAnimationJump: 10,
    speedAnimationHurt: 10,
    speedAnimationGodMode: 10,
    speedAnimationFallen: 10,
    isHurt: false,
    isGodMode: false,

    hurtFrame: 0,
    godModeFrame: 0,

    targetX: 100,
    targetY: 10,
    radius: 40,

    _jump: 11,

    jump: function() {
        this.velocity = -this._jump;
    },

    isJump: function() {
        if (this.y < game.groundLayer) {
            return true;
        }
        return false;
    },

    update: function() {
        this.velocity += game.gravity;
        this.y += this.velocity;

        if (this.isHurt) {
            if (!this.isJump()) { 
                this.y = game.groundLayer;
            }
            this.frame += (game.frames % this.speedAnimationHurt === 0) ? 1 : 0;
            this.frame %= this.animationHurt.length;
        } else if (this.isGodMode) {
            game.speed = 10;
            if (!this.isJump()) {
                this.y = game.groundLayer;
            }
            this.frame += (game.frames % this.speedAnimationGodMode === 0) ? 1 : 0;
            this.frame %= this.animationGodMode.length;
        } else if (this.isJump()) {
            this.frame += (game.frames % this.speedAnimationJump === 0) ? 1 : 0;
            this.frame %= this.animationJump.length;
        } else {
            this.y = game.groundLayer;
            this.frame += (game.frames % this.speedAnimationMove === 0) ? 1 : 0;
            this.frame %= this.animationMove.length;
        }
    },

    render: function(context) {
        context.save();
        context.translate(this.x, this.y);
        var i;
        if (this.isHurt) {
            if (this.hurtFrame === 10) {
                this.hurtFrame = 0;
                this.isHurt = false;
            }
            this.hurtFrame++;
            i = this.animationHurt[this.frame];
            this.sprite[i].draw(context, 60, -45);
        } else if (this.isGodMode) {
            if (this.godModeFrame === 600) {
                this.godModeFrame = 0;
                game.speed = 3.8;
                this.isGodMode = false;
            }
            this.godModeFrame++;
            i = this.animationGodMode[this.frame];
            this.sprite[i].draw(context, 60, -45);
        } else if (this.isJump()) {
            i = this.animationJump[this.frame];
            this.sprite[i].draw(context, 60, -45);
        } else {
            i = this.animationMove[this.frame];
            this.sprite[i].draw(context, 60, -45);

        }
        context.restore();

        // context.beginPath();
        // context.arc(this.targetX, this.y + this.targetY, this.radius, 0, 2*Math.PI, false);
        // context.lineWidth = 1;
        // context.strokeStyle = 'red';
        // context.stroke();
        // context.closePath();
    }
}
