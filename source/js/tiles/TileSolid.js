
import Tile from './tile';


export default class TileSolid extends Tile {
	constructor(props) {
		super(props);

		this.type = 'SOLID';
	}

	render(ctx) {
		super.render(ctx);
	}
}
