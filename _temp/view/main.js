'use strict';

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
canvas.width = 1500;
canvas.height = 800;


let img = new Image();
img.src = 'limekitty.png';

img.onload = function() {

	// back foot
	ctx.drawImage(img,
		192, 32,
		64, 32,
		4, 59,
		64, 32
	);

	// body
	ctx.drawImage(img,
		// положения верхнего левого угла вырезаного изображения относительного исходного положения
		0, 0,
		// определяют высоту и ширину вырезаного изображения
		96, 96,
		// определяют положение изображения на холсте
		0, 0,
		// масштаб изображения
		96, 96
	);

	// front foot
	ctx.drawImage(img,
		192, 32,
		64, 32,
		26, 59,
		64, 32
	);
}
