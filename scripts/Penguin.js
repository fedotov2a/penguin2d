var penguin = {
	x: 0,
	y: 0,

	sprite: [
        /* animate for motion */
        new Sprite(image, 631, 2, 45, 48),
        new Sprite(image, 677, 2, 45, 48),
        new Sprite(image, 727, 2, 45, 48),
        new Sprite(image, 775, 2, 45, 48),

        /* animate for jump */
        new Sprite(image, 503, 2, 38, 50),
        new Sprite(image, 542, 2, 40, 48),
        new Sprite(image, 584, 2, 40, 48) 
    ],

	frame: 0,
	velocity: 0,
	animationMove: [0, 1, 2, 3],
	animationJump: [4, 5, 6],
	speedMove: 15,
	speedJump: 10, 
	radius: 20,

	_jump: 9.5,

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

		if (this.isJump()) {
			this.frame += (game.frames % this.speedJump === 0) ? 1 : 0;
			this.frame %= this.animationJump.length;
		} else {
			this.y = game.groundLayer;
			this.frame += (game.frames % this.speedMove === 0) ? 1 : 0;
			this.frame %= this.animationMove.length;
		}
	},

	render: function(context) {
		context.save();
		context.translate(this.x, this.y);
		var i;
		if (this.isJump()) {
			i = this.animationJump[this.frame];
			this.sprite[i].draw(context, -this.sprite[i].width/2 + 40, -this.sprite[i].height/2);
		} else {
			i = this.animationMove[this.frame];
			this.sprite[i].draw(context, -this.sprite[i].width/2 + 40, -this.sprite[i].height/2);

		}
		context.restore();
	}
}
