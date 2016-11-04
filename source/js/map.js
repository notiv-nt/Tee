
// hello ES2015's Map/Set
export default class WorldMap {
	constructor(data) {
		// TODO:
		this.tiles = data.tiles;
	}

	getTileAt(x, y) {
		for (let tile in this.tiles) {
			if (tile.x === x && tile.y === y) {
				return tile;
			}
		}
	}
}
