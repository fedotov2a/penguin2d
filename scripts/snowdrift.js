var snowdrift = {
	_snowdrift: [],
	repeat: 241,

	sprite: new Sprite(image, 721, 65, 33, 33),

	reset: function () {
		this._snowdrift = [];
	},

	update: function() {

		if (game.frames % this.repeat === 0) {
			var _x = game.width + (this.sprite.width + 200 * Math.random());
			this._snowdrift.push({
				x: _x,
				y: game.groundLayer,
				width: this.sprite.width,
				height: this.sprite.height
			});
		}

		for (var i = 0, length = this._snowdrift.length; i < length; i++) {
			this._snowdrift[i].x -= game.speed;

			if (this._snowdrift[i].x < -50) {
				this._snowdrift.splice(i, 1);
				i--;
				length--;
			}
		}
	},

	render: function(context) {
		for (var i = 0, length = this._snowdrift.length; i < length; i++) {
			this.sprite.draw(context, this._snowdrift[i].x, this._snowdrift[i].y);
		}
	}
};