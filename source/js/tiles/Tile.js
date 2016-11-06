
import config from 'config';


export default class Tile {
	constructor(props) {
		this.width = config.MAIN_SIZE;
		this.height = config.MAIN_SIZE;

		this.defaults();

		if (props.pos) {
			this.pos = props.pos.multiply(config.MAIN_SIZE);
			this._multiplied = true;
		}

		else if (config.DEBUG_MAP) {
			console.log(' ');
			console.warn('[Tile]: Following data has no position:');
			console.dir(props);
		}
	}

	defaults() {
		this._multiplied = false;
	}

	render(ctx) {
		if (config.DEBUG_TILES) {
			ctx.rect(this.pos.x, this.pos.y, config.MAIN_SIZE, config.MAIN_SIZE);
			ctx.stroke();
		}
	}
}
