var Penguin = {
	x: 0,
	y: 0,

	frame: 0,
	velocity: 0,
	animationMove: [0, 1, 2, 3],
	animationJump: [4, 5, 6],
	isJump: false,
	radius: 20,

	gravity: 0.35,
	_jump: 9.5,

	jump: function() {
		this.velocity = -this._jump;
		Penguin.isJump = true;
	},

	update: function() {
		this.velocity += this.gravity;
		this.y += this.velocity;

		if (this.y >= gameHeight - 70) {
			this.y = gameHeight - 70;
			this.frame += (frames % 10 === 0) ? 1 : 0;
			this.frame %= this.animationMove.length;
		}

		if (this.y < gameHeight - 70) { /* jump */
			this.frame += (frames % 10 === 0) ? 1 : 0;
			this.frame %= this.animationJump.length;
		}

		if (this.y < 20) {
			this.y = 20;
			this.velocity = 2;
		}

	},

	render: function(context) {
		context.save();
		context.translate(this.x, this.y);
		var i;
		if (this.y < gameHeight - 70) { /*jump*/
			i = this.animationJump[this.frame];
			Penguin.isJump = false;
			spritePegnuin[i].draw(context, -spritePegnuin[i].width/2 + 40, -spritePegnuin[i].height/2);

		} else {
			i = this.animationMove[this.frame];
			spritePegnuin[i].draw(context, -spritePegnuin[i].width/2 + 40, -spritePegnuin[i].height/2);

		}
		context.restore();
	}
}
