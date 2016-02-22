var Enemies = {
	rocks: [],
	pits: [],
	snowdirfts: [],

	reset: function () {

	},

	update: function() {
		if (frames % 100 === 0) {
			var _x = gameWidth + (spriteRock.width + 150 * Math.random());
			this.rocks.push({
				x: _x,
				y: gameHeight - 70,
				width: spriteRock.width,
				height: spriteRock.height
			});
		}

		for (var i = 0, len = this.rocks.length; i < len; i++) {
			this.rocks[i].x -= 5;

			if (this.rocks[i].x < -50) {
				this.rocks.splice(i, 1);
				i--;
				len--;
			}
		}
	},

	render: function(context) {
		for (var i = 0, len = this.rocks.length; i < len; i++) {
			spriteRock.draw(context, this.rocks[i].x, this.rocks[i].y);
		}
	}
};