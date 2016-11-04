
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
		this.resetBrowser();
		this.render();
	}

	render() {
		// requestAnimationFrame(this.render);
		this.ctx.clearRect(0, 0, this.width, this.height);

		let map = this.world.map;

		if (map) {
			for (let tile of map.tiles) {
				tile.render(this.ctx);
			}
		}

		setTimeout(this.render, 1000);
	}

	resetBrowser() {
		document.addEventListener('keydown', (e) => {
			// e.preventDefault();
			console.log(`KeyCode: ${e.keyCode}, key: ${e.code}`);
		});

		window.oncontextmenu = () => {
			return false;
		}
	}
}
