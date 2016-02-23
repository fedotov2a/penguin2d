var iceHole = {
	_iceHole: [],
	repeat: 100,

	sprite: new Sprite(image, 673, 75, 48, 29),

	reset: function () {
		this._iceHole = [];
	},

	update: function() {
		if (game.frames % this.repeat === 0) {
			var _x = game.width + (this.sprite.width + 150 * Math.random());
			this._iceHole.push({
				x: _x,
				y: game.groundLayer,
				width: this.sprite.width,
				height: this.sprite.height
			});
		}

		for (var i = 0, length = this._iceHole.length; i < length; i++) {
			this._iceHole[i].x -= game.speed;

			if (this._iceHole[i].x < -50) {
				this._iceHole.splice(i, 1);
				i--;
				length--;
			}
		}
	},

	render: function(context) {
		for (var i = 0, length = this._iceHole.length; i < length; i++) {
			this.sprite.draw(context, this._iceHole[i].x, this._iceHole[i].y);
		}
	}
};