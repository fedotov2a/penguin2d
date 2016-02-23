var rock = {
	_rock: [],
	repeat: 97,

	sprite: new Sprite(image, 633, 74, 37, 28),

	reset: function () {
		this._rock = [];
	},

	update: function() {
		if (game.frames % this.repeat === 0) {
			var _x = game.width + (this.sprite.width + 500 * Math.random());
			this._rock.push({
				x: _x,
				y: game.groundLayer,
				width: this.sprite.width,
				height: this.sprite.height
			});
		}

		for (var i = 0, length = this._rock.length; i < length; i++) {
			this._rock[i].x -= game.speed;

			if (this._rock[i].x < -50) {
				this._rock.splice(i, 1);
				i--;
				length--;
			}
		}
	},

	render: function(context) {
		for (var i = 0, length = this._rock.length; i < length; i++) {
			this.sprite.draw(context, this._rock[i].x, this._rock[i].y);
		}
	}
};