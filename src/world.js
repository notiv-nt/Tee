
class World {
	constructor() {
		this.tiles = [];
		this.players = [];
	}

	// prepare data
	preTick() {}

	// calculate everything
	tick() {}

	// clear
	postTick() {}

	start() {
		setInterval(() => {
			this.preTick();
			this.tick();
			this.postTick();
		}, Math.round(1000/60));
	}

	getTileAt(x, y) {
		for (let tile in this.tiles) {
			if (tile.x === x && tile.y === y) {
				return tile;
			}
		}
	}

	addPlayer(player) {
		this.players.push(player);
	}

	test() {
		this.tiles = [
			{ x: 27, y: 5 },
			{ x: 27, y: 6 },
			{ x: 27, y: 7 },
			{ x: 27, y: 8 },
			{ x: 27, y: 9 },
			{ x: 27, y: 10 },
			{ x: 27, y: 11 },
			{ x: 27, y: 12 },
			{ x: 27, y: 13 },
			{ x: 27, y: 14 }
		];
	}
}
