
import config from 'config';
import Vec from './lib/vec';


export default class Player {
	constructor(world) {
		this.pos = new Vec(0, 0);
		this.nextPos = new Vec(0, 0);
		this.width = config.MAIN_SIZE;
		this.height = config.MAIN_SIZE;
		this.speed = new Vec(0, 0);
		this.world = world;

		// TEMP:
		this.drawCollisions = [];
	}

	preTick() {
		this.drawCollisions = [];
		let input = this.world.input;

		this.nextPos = this.pos.copy();
		// this.nextPos = this.world.input.mousePos;

		let tempVel = 1;

		if (input.keys.LEFT) {
			this.nextPos.x -= tempVel;
		}

		if (input.keys.RIGHT) {
			this.nextPos.x += tempVel;
		}

		if (input.keys.UP) {
			this.nextPos.y -= tempVel;
		}

		if (input.keys.DOWN) {
			this.nextPos.y += tempVel;
		}

		this.move();

		// 	.add(config.GRAVITY.x, config.GRAVITY.y);
	}

	tick() {
		this.pos = this.nextPos.copy();
	}

	move() {
		let _from = this.pos;
		let _to = this.nextPos.copy();
		let prevPos = _from.copy();

		// корень из суммы квадратов координат
		let len = Math.round(
			Math.sqrt(
				Math.pow(Math.abs(_to.x - _from.x), 2) +
				Math.pow(Math.abs(_to.y - _from.y), 2)
			)
		);

		for (let i = 0; i < len; i += 0.5) {
			let sinA = -(_from.x - _to.x) /
				Math.sqrt(
					Math.pow(_from.x - _to.x, 2) + Math.pow(_from.y - _to.y, 2)
				);

			let cosA = -(_from.y - _to.y) /
				Math.sqrt(
					Math.pow(_from.x - _to.x, 2) + Math.pow(_to.y - _from.y, 2)
				);

			let virtualPos = new Vec(
				Math.floor(_from.x + sinA * i),
				Math.floor(_from.y + cosA * i)
			);

			if (prevPos.x === virtualPos.x && prevPos.y === virtualPos.y) {
				continue;
			}

			// проверям сначало X
			if (this.checkCollide({ x: virtualPos.x, y: prevPos.y })) {
				// оставляем X, добавляем Y
				this.pos = new Vec(prevPos.x, prevPos.y);
				this.nextPos = new Vec(prevPos.x, this.nextPos.y);

				return this.move();
			}

			// потом Y
			else if (this.checkCollide({ x: prevPos.x, y: virtualPos.y })) {
				// оставляем Y, добавляем X
				this.pos = new Vec(prevPos.x, prevPos.y);
				this.nextPos = new Vec(this.nextPos.x, prevPos.y);

				return this.move();
			}

			// идем дальше
			prevPos = virtualPos;
		}

		this.nextPos = _to;
	}

	checkCollide(pos) {
		let map = this.world.map;

		let tiles = [
			// top left
			map.getTile(pos.x, pos.y),
			// top right
			map.getTile(pos.x + this.width - 1, pos.y),
			// bottom left
			map.getTile(pos.x, pos.y + this.height - 1),
			// bottom right
			map.getTile(pos.x + this.width - 1, pos.y + this.height - 1)
		];

		for (let tile of tiles) {
			if (tile && tile.type === 'SOLID') {
				return true;
			}
		}
	}

	render(ctx) {
		let prev_strokeStyle = ctx.fillStyle;

		ctx.beginPath();
		ctx.fillStyle = '#09f';
		ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
		ctx.fill();
		ctx.closePath();

		ctx.fillStyle = prev_strokeStyle;

		for (let i of this.drawCollisions) {
			// console.log(i.x, i.y);
			drawCollisionRectangle(i.x, i.y);
		}

		function drawCollisionRectangle(x, y) {
			let prevStrokeStyle = ctx.strokeStyle;
			let prevlineWidth = ctx.lineWidth;

			ctx.strokeStyle = 'rgba(234, 44, 80, 1)';
			ctx.lineWidth = 1;
			ctx.strokeRect(x, y, config.MAIN_SIZE, config.MAIN_SIZE);
			ctx.strokeStyle = prevStrokeStyle;
			ctx.lineWidth = prevlineWidth;
		}
	}
}
