'use strict';

let canvas = document.querySelector('#game');
let debugElem = document.querySelector('#debug');
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight - 20;

const GRID_SIZE = 40;

let posFrom = {
	x: 540,
	y: 140
}

let posTo = {
	x: 0,
	y: 0
}


function drawWorld() {
	ctx.clearRect(0, 0, width, height);

	ctx.strokeStyle = 'rgba(0, 0, 0, .5)';
	// draw x grid
	for (var i = 0; i < height; i += GRID_SIZE) {
		ctx.beginPath();
		ctx.moveTo(0, i);
		ctx.lineTo(width, i);
		ctx.stroke();
		ctx.closePath();
	}

	// draw y grid
	for (var i = 0; i < width; i += GRID_SIZE) {
		ctx.beginPath();
		ctx.moveTo(i, 0);
		ctx.lineTo(i, height);
		ctx.stroke();
		ctx.closePath();
	}

	// draw a line
	ctx.beginPath();
	ctx.moveTo(posFrom.x, posFrom.y);
	ctx.lineTo(posTo.x, posTo.y);
	ctx.stroke();
	ctx.closePath();


	// корень из суммы квадратов координат
	let len = Math.round(
		Math.sqrt(
			Math.pow(Math.abs(posTo.x - posFrom.x), 2) +
			Math.pow(Math.abs(posTo.y - posFrom.y), 2)
		)
	);

	// line length
	// ctx.fillText(len, posTo.x, posTo.y - 5);

	let lineSeparWidth = 5;
	let checkedTiles = [];
	for (let i = 0; i < len; i += lineSeparWidth) {
		let sinA = -(posFrom.x - posTo.x) /
			Math.sqrt(
				Math.pow(posFrom.x - posTo.x, 2) + Math.pow(posFrom.y - posTo.y, 2)
			);

		let cosA = -(posFrom.y - posTo.y) /
			Math.sqrt(
				Math.pow(posFrom.x - posTo.x, 2) + Math.pow(posTo.y - posFrom.y, 2)
			);

		let drawingTileCoords = normalizeCorrdsToTile(posFrom.x + sinA * i, posFrom.y + cosA * i);
		let checkedStr = `${drawingTileCoords.x}:${drawingTileCoords.y}`;

		if (checkedTiles.indexOf(checkedStr) === -1) {
			checkedTiles.push(checkedStr);
			drawCollisionRectangle(drawingTileCoords.x, drawingTileCoords.y);
		}
	}

	// drawCollisionRectangle(posTo.x, posTo.y);
	function normalizeCorrdsToTile(x, y) {
		return {
			x: x - (x % GRID_SIZE),
			y: y - (y % GRID_SIZE)
		};
	}

	function drawCollisionRectangle(x, y) {
		let prevStrokeStyle = ctx.strokeStyle;
		let prevlineWidth = ctx.lineWidth;

		ctx.strokeStyle = 'rgba(234, 44, 80, 1)';
		ctx.lineWidth = 1;
		ctx.strokeRect(x, y, GRID_SIZE, GRID_SIZE);
		ctx.strokeStyle = prevStrokeStyle;
		ctx.lineWidth = prevlineWidth;
	}
}

setInterval(() => {
	drawWorld();
}, Math.round(1000/60));


canvas.addEventListener('mousemove', (e) => {
	posTo.x = e.clientX;
	posTo.y = e.clientY;

	debug.innerHTML = `From: x: ${posFrom.x}, y: ${posFrom.y} <br> To: x: ${posTo.x}, y: ${posTo.y}`;
});

canvas.addEventListener('click', (e) => {
	posFrom.x = e.clientX;
	posFrom.y = e.clientY;
});
