var rock = {
	_rock: [],
	repeat: 97,

	x: 0,
	y: game.groundLayer,
	radius: 15,

	sprite: new Sprite(image, 633, 74, 37, 28),

	reset: function () {
		this._rock = [];
	},

	isHit: function(rockX, rockY) {
		var x = (penguin.targetX - rockX) * (penguin.targetX - rockX);
		var y = (penguin.y - rockY) * (penguin.y - rockY);
		var r = (this.radius + penguin.radius) * (this.radius + penguin.radius);

		if (x + y <= r) {
			return true;
		}
		return false;
	},

	update: function() {
		if (game.frames % this.repeat === 0) {
			this.x = game.width + (this.sprite.width + 500 * Math.random());
			this._rock.push({
				x: rock.x,
				y: game.groundLayer,
				width: this.sprite.width,
				height: this.sprite.height
			});
		}

		for (var i = 0, length = this._rock.length; i < length; i++) {
			this._rock[i].x -= game.speed;

			if (this.isHit(this._rock[i].x + 20, this.y + 15)) {
				//console.log('HIT ROCK');
			}

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
			context.beginPath();
	        context.arc(this._rock[i].x+20, this.y+15, this.radius, 0, 2*Math.PI, false);
	        context.lineWidth = 1;
	        context.strokeStyle = 'green';
	        context.stroke();
	        context.closePath();
		}
	}
};