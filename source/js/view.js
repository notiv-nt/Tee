
import config from 'config';


export default class View {
	constructor(canvasId, world) {
		let canvas = document.querySelector(canvasId);

		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');
		this.width = canvas.width = window.innerWidth;
		this.height = canvas.height = window.innerHeight;
		this.world = world;

		// -_-
		this.render = this.render.bind(this);
		this.init();
	}

	init() {
		this.render();
	}

	render() {
		this.ctx.clearRect(0, 0, this.width, this.height);

		this.drawGrid();

		// this.temp();

		let map = this.world.map;
		let players = this.world.players;

		if (map) {
			for (let tile of map.tiles) {
				tile.render(this.ctx);
			}
		}

		if (players && players.length) {
			for (let player of players) {
				player.render(this.ctx);
			}
		}

		// setTimeout(this.render, 10);
		requestAnimationFrame(this.render);
	}

	drawGrid() {
		let ctx = this.ctx;
		let prev_StrokeStyle = ctx.strokeStyle;

		ctx.strokeStyle = 'rgba(160, 160, 160, .8)';

		// draw x grid
		for (var i = 0; i < this.height; i += config.MAIN_SIZE) {
			ctx.beginPath();
			ctx.moveTo(0, i);
			ctx.lineTo(this.width, i);
			ctx.stroke();
			ctx.closePath();
		}

		// draw y grid
		for (var i = 0; i < this.width; i += config.MAIN_SIZE) {
			ctx.beginPath();
			ctx.moveTo(i, 0);
			ctx.lineTo(i, this.height);
			ctx.stroke();
			ctx.closePath();
		}

		ctx.strokeStyle = prev_StrokeStyle;
	}

	temp() {
		let ctx = this.ctx;
		let world = this.world;
		let input = world.input;
		let player = world.controlPlayer;

		let cursor = {
			x: input.mousePos.x,
			y: input.mousePos.y,
		}

		let prev_StrokeStyle = ctx.strokeStyle;

		ctx.strokeStyle = 'red';

		ctx.beginPath();

		// top left
		ctx.moveTo(player.pos.x, player.pos.y);
		ctx.lineTo(cursor.x, cursor.y);
		ctx.stroke();

		// top right
		ctx.moveTo(player.pos.x + player.width, player.pos.y);
		ctx.lineTo(cursor.x + player.width, cursor.y);
		ctx.stroke();

		// bottom left
		ctx.moveTo(player.pos.x, player.pos.y + player.height);
		ctx.lineTo(cursor.x, cursor.y + player.height);
		ctx.stroke();

		// bottom right
		ctx.moveTo(player.pos.x + player.width, player.pos.y + player.height);
		ctx.lineTo(cursor.x + player.width, cursor.y + player.height);
		ctx.stroke();

		ctx.closePath();

		ctx.strokeStyle = prev_StrokeStyle;
	}
}
