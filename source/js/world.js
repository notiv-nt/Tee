
export default class World {
	constructor() {
		this.players = [];
		this.map = null;
		// ms
		// this.tickInterval = 16;
		this.tickInterval = 200;
	}

	// prepare data
	preTick() {}

	// calculate everything
	tick() {
	}

	// clear
	postTick() {}

	start() {
		setInterval(() => {
			this.preTick();
			this.tick();
			this.postTick();
		}, this.tickInterval);
	}

	setMap(map) {
		this.map = map;
	}

	addPlayer(player) {
		this.players.push(player);
	}
}
