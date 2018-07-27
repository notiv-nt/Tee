import Input from './input';


export default class World {
	constructor() {
		this.players = [];
		this.map = null;
		// ms
		// this.tickInterval = 16;
		this.tickInterval = 70;
		this.controlPlayer = null;

		this.input = new Input();
	}

	// prepare data
/*	preTick() {
		// console.log('World: preTick');

		let players = this.players;

		if (players.length) {
			for (let player of players) {
				player.preTick();
			}
		}
	} */

	// calculate everything
	tick() {
		// console.log('World: tick');

		let players = this.players;

		if (players.length) {
			for (let player of players) {
				player.tick();
			}
		}
	}

	// clear
	// postTick() {}

	start() {
		setInterval(() => {
			// this.preTick();
			this.tick();
			// this.postTick();
		}, this.tickInterval);
	}

	setMap(map) {
		this.map = map;
	}

	addPlayer(player) {
		player.world = this;

		// if not exists
		if (this.players.indexOf(player) === -1) {
			this.players.push(player);
		}
	}

	setControlPlayer(player) {
		this.controlPlayer = player;

		this.bindActions();
	}

	bindActions() {
		// TODO: rewrite
		// document.addEventListener('keyup', )
	}
}
