var Penguin = {
	x: 0,
	y: 0,

	frame: 0,
	velocity: 0,
	animation: [0, 1, 2, 3],

	radius: 20,

	gravity: 0.25,
	_jump: 4.5,

	jump: function() {
		this.velocity = - this._jump;
	},

	update: function() {
		this.frame += (frames % 15 === 0) ? 1 : 0;
		this.frame %= this.animation.length;

		this.velocity += this.gravity;
		this.y += this.velocity;

		this.y = gameHeight - 70;
		this.velocity = this._jump;
	},

	render: function(context) {
		context.save();
		context.translate(this.x, this.y);
		var i = this.animation[this.frame];
		spritePegnuin[i].draw(context, -spritePegnuin[i].width/2 + 40, -spritePegnuin[i].height/2);
		context.restore();
	}
}