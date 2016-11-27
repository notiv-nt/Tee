
import config from 'config';


// hello ES2015's Map/Set
export default class WorldMap {
	constructor(data) {
		// TODO:
		this.tiles = data.tiles;
	}

	// getTileAt(431, 117)
	getTile(x, y) {
		for (let tile of this.tiles) {
			let tilePos = tile.pos;

			if (tilePos.x < x && tilePos.x + tile.width > x &&
				tilePos.y < y && tilePos.y + tile.height > y
			) {
				return tile;
			}
		}
	}

	// getTileAtRelative(12, 14)
	getTileRelative(x, y) {
		return this.getTileAt(_x * config.MAIN_SIZE, _y * config.MAIN_SIZE);
	}
}
