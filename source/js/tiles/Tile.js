
import config from 'config';


export default class Tile {
	constructor(props) {
		this.width = config.GRID_SIZE;
		this.height = config.GRID_SIZE;

		this.defaults();

		if (props.pos) {
			this.pos = props.pos.multiply(config.GRID_SIZE);
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
			ctx.rect(this.pos.x, this.pos.y, config.GRID_SIZE, config.GRID_SIZE);
			ctx.stroke();
		}
	}
}
