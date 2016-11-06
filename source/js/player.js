
import config from 'config';
import Vec from './lib/vec';


export default class Player {
	constructor(world) {
		this.pos = new Vec(0, 0);
		this.nextPos = new Vec(0, 0);
		this.width = config.MAIN_SIZE - 1;
		this.height = config.MAIN_SIZE - 1;
		this.speed = new Vec(0, 0);
		this.world = world;

		// TEMP:
		this.drawCollisions = [];
	}

	preTick() {
		this.drawCollisions = [];
		let input = this.world.input;

		// this.nextPos = this.pos.copy();
		this.nextPos = this.world.input.mousePos;

		if (input.keys.LEFT) {
			this.nextPos.x -= 5;
		}

		if (input.keys.RIGHT) {
			this.nextPos.x += 5;
		}

		if (input.keys.UP) {
			this.nextPos.y -= 5;
		}

		if (input.keys.DOWN) {
			this.nextPos.y += 5;
		}

		this.checkCollide2();

		// 	.add(config.GRAVITY.x, config.GRAVITY.y);
	}

	tick() {
		// console.log(`From: ${this.pos.x} ${this.pos.y}, to: ${this.nextPos.x} ${this.nextPos.y}`);
		// this.pos = this.nextPos;
	}

	checkCollide2() {
		let _from = this.pos;
		let _to = this.nextPos;

		// корень из суммы квадратов координат
		let len = Math.round(
			Math.sqrt(
				Math.pow(Math.abs(_to.x - _from.x), 2) +
				Math.pow(Math.abs(_to.y - _from.y), 2)
			)
		);

		let checkedPos = [];

		for (let i = 0; i < len; i += config.COLLIDE_SEPARATE_WIDTH) {
			let sinA = -(_from.x - _to.x) /
				Math.sqrt(
					Math.pow(_from.x - _to.x, 2) + Math.pow(_from.y - _to.y, 2)
				);

			let cosA = -(_from.y - _to.y) /
				Math.sqrt(
					Math.pow(_from.x - _to.x, 2) + Math.pow(_to.y - _from.y, 2)
				);

			// TODO: .round ?
			let nextX = Math.round(_from.x + sinA * i);
			let nextY = Math.round(_from.y + cosA * i);

			let coordsStr = `${nextX}:${nextY}`;

			if (!checkedPos[coordsStr]) {

				// just something, 1 просто для минимального ресурса памяти
				checkedPos[coordsStr] = 1;
			} else {
			}

			coords.push(`${nextX}: ${nextY}`);
			// let drawingTileCoords = normalizeCorrdsToTile(_from.x + sinA * i, _from.y + cosA * i);
			// let checkedStr = `${drawingTileCoords.x}:${drawingTileCoords.y}`;

			// if (checkedTiles.indexOf(checkedStr) === -1) {
			// 	checkedTiles.push(checkedStr);
			// 	this.drawCollisions.push({ x: drawingTileCoords.x, y: drawingTileCoords.y });
			// }
		}

		document.querySelector('#debug').innerHTML = coords.join('<br>');
	}

	checkCollide() {
		let _to = this.nextPos;

		let edgesToCheck = [];

		// идем вправо
		if (this.nextPos.x > this.pos.x) {

			// и вверх
			if (this.nextPos.y < this.pos.y) {
				edgesToCheck.push(
					// правый верхний
					{
						x: this.pos.x + this.width + 1,
						y: this.pos.y - 1
					},
					// левый верхний
					{
						x: this.pos.x,
						y: this.pos.y - 1
					},
					// правый нижний
					{
						x: this.pos.x + this.width + 1,
						y: this.pos.y + this.height
					}
				);
			}

			// или вниз
			else if (this.nextPos.y > this.pos.y) {
				edgesToCheck.push(
					// правый нижний
					{
						x: this.pos.x + this.width + 1,
						y: this.pos.y + this.height + 1
					},
					// левый нижний
					{
						x: this.pos.x,
						y: this.pos.y + this.height + 1
					},
					// правый верхний
					{
						x: this.pos.x + this.width + 1,
						y: this.pos.y + this.height
					}
				);
			}

			// ровно вправо
			else {
				edgesToCheck.push(
					// right top
					{ x: this.pos.x + this.width + 1, y: this.pos.y },
					// right bottom
					{ x: this.pos.x + this.width + 1, y: this.pos.y + this.height }
				);
			}
		}

		// идем влево
		else if (this.nextPos.x < this.pos.x) {

			// и вверх
			if (this.nextPos.y < this.pos.y) {
				edgesToCheck.push(
					// левый верхний
					{
						x: this.pos.x - 1,
						y: this.pos.y - 1
					},
					// левый нижний
					{
						x: this.pos.x - 1,
						y: this.pos.y
					},
					// правый верхний
					{
						x: this.pos.x + this.width,
						y: this.pos.y - 1
					}
				);
			}

			// или вниз
			else if (this.nextPos.y > this.pos.y) {
				edgesToCheck.push(
					// левый нижний
					{
						x: this.pos.x + this.width - 1,
						y: this.pos.y + this.height + 1
					},
					// левый верхний
					{
						x: this.pos.x,
						y: this.pos.y
					},
					// правый нижний
					{
						x: this.pos.x + this.width,
						y: this.pos.y + this.height + 1
					}
				);
			}

			// ровно влево
			else {
				edgesToCheck.push(
					// левый верхний
					{ x: this.pos.x - 1, y: this.pos.y },
					// левый нижний
					{ x: this.pos.x - 1, y: this.pos.y + this.height }
				);
			}
		}

		// идем по вертикали ровно вверх\вниз
		else if (this.nextPos.x === this.pos.x) {

			// вверх
			if (this.nextPos.y < this.pos.y) {
				edgesToCheck.push(
					// левый верхний
					{
						x: this.pos.x,
						y: this.pos.y - 1
					},
					// правый верхний
					{
						x: this.pos.x + this.width,
						y: this.pos.y - 1
					},
				);
			}

			// вниз
			else if (this.nextPos.y > this.pos.y) {
				edgesToCheck.push(
					// левый нижний
					{
						x: this.pos.x,
						y: this.pos.y + this.height + 1
					},
					// правый нижний
					{
						x: this.pos.x + this.width,
						y: this.pos.y + this.height + 1
					},
				);
			}
		}

		for (let edge of edgesToCheck) {
			let _from = edge;

			// корень из суммы квадратов координат
			let len = Math.round(
				Math.sqrt(
					Math.pow(Math.abs(_to.x - _from.x), 2) +
					Math.pow(Math.abs(_to.y - _from.y), 2)
				)
			);

			let checkedTiles = [];
			for (let i = 0; i < len; i += config.COLLIDE_SEPARATE_WIDTH) {
				let sinA = -(_from.x - _to.x) /
					Math.sqrt(
						Math.pow(_from.x - _to.x, 2) + Math.pow(_from.y - _to.y, 2)
					);

				let cosA = -(_from.y - _to.y) /
					Math.sqrt(
						Math.pow(_from.x - _to.x, 2) + Math.pow(_to.y - _from.y, 2)
					);

				let drawingTileCoords = normalizeCorrdsToTile(_from.x + sinA * i, _from.y + cosA * i);
				let checkedStr = `${drawingTileCoords.x}:${drawingTileCoords.y}`;

				if (checkedTiles.indexOf(checkedStr) === -1) {
					checkedTiles.push(checkedStr);
					this.drawCollisions.push({ x: drawingTileCoords.x, y: drawingTileCoords.y });
				}
			}
		}

		// drawCollisionRectangle(posTo.x, posTo.y);

		function normalizeCorrdsToTile(x, y) {
			return {
				x: x - (x % config.MAIN_SIZE),
				y: y - (y % config.MAIN_SIZE)
			};
		}
	}

	render(ctx) {
		let prev_strokeStyle = ctx.strokeStyle;

		ctx.strokeStyle = 'rgba(0, 0, 0, .8)';
		// ctx.rect(this.pos.x, this.pos.y, config.MAIN_SIZE, config.MAIN_SIZE);
		// ctx.stroke();

		ctx.strokeStyle = prev_strokeStyle;

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
