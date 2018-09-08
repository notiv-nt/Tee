import config from 'config';
import Vec from './lib/vec';

export default class Player {
	constructor(world) {
		this.pos = new Vec(0, 0);
		this.virtualPos = new Vec(0, 0);
		this.width = config.MAIN_SIZE;
		this.height = config.MAIN_SIZE;
		this.speed = new Vec(0, 0);
		this.world = world;
		this.velocity = new Vec(0, 0);

		// TEMP:
		this.drawCollisions = [];
	}

	// reset everything before new cycle
	preTick() {
		let input = this.world.input;

		this.drawCollisions = [];

		// set virtual position as your current position
		this.virtualPos = this.pos.copy();

		// handle input keys
		if (input.keys.LEFT) { this.velocity.add(-4, 0); }
		if (input.keys.RIGHT) { this.velocity.add(4, 0); }
		if (input.keys.UP) { this.velocity.add(0, -4); }
		if (input.keys.DOWN) { this.velocity.add(0, 4); }

		// attach to the cursor
		// let mousePos = this.world.input.mousePos;
		// this.velocity.x += (mousePos.x - this.virtualPos.x) * .7;
		// this.velocity.y += (mousePos.y - this.virtualPos.y) * .7;

		// TODO: add grativy velocity
		// this.nextPos.add(config.GRAVITY.x, config.GRAVITY.y);

		// add force to virtual position
		this.virtualPos.x += this.velocity.x;
		this.virtualPos.y += this.velocity.y;

		// reduce velocity for next cycle
		// TODO: move to postTick
		this.velocity.x = Math.abs(this.velocity.x) < 4 ? 0 : this.velocity.x * 0.8;
		this.velocity.y = Math.abs(this.velocity.y) < 4 ? 0 : this.velocity.y * 0.8;
	}

	tick() {
		this.preTick();

		this.move();

		this.pos = this.virtualPos.copy();
	}

	move() {
		let startPos = this.pos;
		let endPos = this.virtualPos.copy();

		// The length between the current position and the position in which we must set
		let len =
			Math.sqrt(
				Math.pow(Math.abs(endPos.x - startPos.x), 2) +
				Math.pow(Math.abs(endPos.y - startPos.y), 2)
			)

		let sinA = -(startPos.x - endPos.x) /
			Math.sqrt(
				Math.pow(startPos.x - endPos.x, 2) + Math.pow(startPos.y - endPos.y, 2)
			);

		let cosA = -(startPos.y - endPos.y) /
			Math.sqrt(
				Math.pow(startPos.x - endPos.x, 2) + Math.pow(endPos.y - startPos.y, 2)
			);

		// loop from 0 (start position) and length (end position)
		let prevPos = startPos.copy();
		for (let i = 0, collideX = false, collideY = false; i < len; i += 0.1) {
			let virtualPos = {
				x: Math.floor(startPos.x + sinA * i),
				y: Math.floor(startPos.y + cosA * i)
			}

			log(virtualPos);

			// if same position
			// if (prevPos.x === virtualPos.x && prevPos.y === virtualPos.y) {
			// 	continue;
			// }

			// Hit a wall by X pos
			if (!collideX && this.checkCollide({ x: virtualPos.x, y: prevPos.y })) {
				collideX = true;
				// virtualPos.x = prevPos.x;

				// this.virtualPos.x = prevPos.x;
				// this.virtualPos.y = prevPos.y;
				// log('collide')

				// return;

				// оставляем X, добавляем Y
				// this.pos = new Vec(prevPos.x, prevPos.y);
				// this.nextPos = new Vec(prevPos.x, this.nextPos.y);

				// return this.move();
			}

			// then Y
			if (!collideY && this.checkCollide({ x: prevPos.x, y: virtualPos.y })) {
				collideY = true;
				// virtualPos.y = prevPos.y;

				// this.virtualPos.x = prevPos.x;
				// this.virtualPos.y = prevPos.y;

				// оставляем Y, добавляем X
				// this.pos = new Vec(prevPos.x, prevPos.y);
				// this.nextPos = new Vec(this.nextPos.x, prevPos.y);

				// return this.move();
			}

			if (collideX && collideY) {
				// if we can move by x
				if (!this.checkCollide({ x: virtualPos.x, y: prevPos.y })) {
					virtualPos.x = prevPos.x;
				}

				// if we can move by y
				else if (!this.checkCollide({ x: prevPos.x, y: virtualPos.y })) {
					virtualPos.y = prevPos.y;
				}

				else {
					virtualPos.x = prevPos.x;
					virtualPos.y = prevPos.y;
					this.velocity.x = 0;
					this.velocity.y = 0;
					break;
				}
			}

			else if (collideX) {
				this.velocity.x = 0;
				virtualPos.x = prevPos.x;

				// break;
			}

			else if (collideY) {
				this.velocity.y = 0;
				virtualPos.y = prevPos.y;

				// break;
			}

			// and both
			// if ((collideY && collideX) || this.checkCollide({ x: virtualPos.x, y: virtualPos.y })) {
			// 	collideX = true;
			// 	collideY = true;
			// 	return;
			// }

			// We didn't touch anything, set current virtual position
			// if (!collideX && !collideY) {
				prevPos = virtualPos;
			// }

			// if (collideX && collideY) {
			// 	break;
			// }
		}

		this.virtualPos.x = prevPos.x;
		this.virtualPos.y = prevPos.y;
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
