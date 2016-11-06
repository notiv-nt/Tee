
import Vec from './lib/vec';


export default class Input {
	constructor() {
		this.mousePos = new Vec(0, 0);
		this.mousePressed = false;
		this.mouseClicked = false;

		this.keys = {};

		this.resetBrowser();
		this.bindMouse();
		this.bindKeyboard();
	}

	bindMouse() {
		let doc = document;

		doc.addEventListener('mousemove', (e) => {
			this.mousePos.set(e.clientX, e.clientY);
		});

		doc.addEventListener('mousedown', (e) => { this.mousePressed = true; });
		doc.addEventListener('mouseup', (e) => { this.mousePressed = false; });

		// TODO: mouseClickedPos ?
		doc.addEventListener('click', (e) => { this.mouseClicked = true; });
	}

	bindKeyboard() {
		let keys = this.keys;

		document.addEventListener('keydown', (e) => {
			// e.preventDefault();
			// console.log(`KeyCode: ${e.keyCode}, key: ${e.code}`);

			switch (e.keyCode) {
				case 83: {
					keys.LEFT = true;
					break;
				}

				case 70: {
					keys.RIGHT = true;
					break;
				}

				case 69: {
					keys.UP = true;
					break;
				}

				case 68: {
					keys.DOWN = true;
					break;
				}
			}
		});

		document.addEventListener('keyup', (e) => {
			switch (e.keyCode) {
				case 83: {
					keys.LEFT = false;
					break;
				}

				case 70: {
					keys.RIGHT = false;
					break;
				}

				case 69: {
					keys.UP = false;
					break;
				}

				case 68: {
					keys.DOWN = false;
					break;
				}
			}
		});
	}

	resetBrowser() {
		window.oncontextmenu = () => false;
	}
}
