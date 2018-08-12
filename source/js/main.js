import 'styles/main.styl';

import World from './world';
import WorldMap from './map';
import TileSolid from './tiles/TileSolid';
import Vec from './lib/vec';
import View from './view';
import Player from './player';


let world = new World();

let map = new WorldMap({
	tiles: [
		// top bar
		new TileSolid({ pos: new Vec(2, 2) }),
		new TileSolid({ pos: new Vec(3, 2) }),
		new TileSolid({ pos: new Vec(4, 2) }),
		new TileSolid({ pos: new Vec(5, 2) }),
		new TileSolid({ pos: new Vec(6, 2) }),
		new TileSolid({ pos: new Vec(7, 2) }),
		new TileSolid({ pos: new Vec(8, 2) }),
		new TileSolid({ pos: new Vec(9, 2) }),
		new TileSolid({ pos: new Vec(10, 2) }),
		new TileSolid({ pos: new Vec(11, 2) }),
		new TileSolid({ pos: new Vec(12, 2) }),
		new TileSolid({ pos: new Vec(13, 2) }),
		new TileSolid({ pos: new Vec(14, 2) }),
		new TileSolid({ pos: new Vec(15, 2) }),
		new TileSolid({ pos: new Vec(16, 2) }),
		new TileSolid({ pos: new Vec(17, 2) }),
		new TileSolid({ pos: new Vec(18, 2) }),
		new TileSolid({ pos: new Vec(19, 2) }),
		new TileSolid({ pos: new Vec(20, 2) }),
		new TileSolid({ pos: new Vec(21, 2) }),
		new TileSolid({ pos: new Vec(22, 2) }),
		new TileSolid({ pos: new Vec(23, 2) }),
		new TileSolid({ pos: new Vec(24, 2) }),
		new TileSolid({ pos: new Vec(25, 2) }),

		// left
		new TileSolid({ pos: new Vec(2, 3) }),
		new TileSolid({ pos: new Vec(2, 4) }),
		new TileSolid({ pos: new Vec(2, 5) }),
		new TileSolid({ pos: new Vec(2, 6) }),
		new TileSolid({ pos: new Vec(2, 7) }),
		new TileSolid({ pos: new Vec(2, 8) }),
		new TileSolid({ pos: new Vec(2, 9) }),
		new TileSolid({ pos: new Vec(2, 10) }),
		new TileSolid({ pos: new Vec(2, 11) }),

		// bottom
		new TileSolid({ pos: new Vec(3, 11) }),
		new TileSolid({ pos: new Vec(4, 11) }),
		new TileSolid({ pos: new Vec(5, 11) }),
		new TileSolid({ pos: new Vec(6, 11) }),
		new TileSolid({ pos: new Vec(7, 11) }),
		new TileSolid({ pos: new Vec(8, 11) }),
		new TileSolid({ pos: new Vec(9, 11) }),

		new TileSolid({ pos: new Vec(9, 12) }),
		new TileSolid({ pos: new Vec(9, 13) }),
		new TileSolid({ pos: new Vec(9, 14) }),
		new TileSolid({ pos: new Vec(9, 15) }),
		// new TileSolid({ pos: new Vec(10, 11) }),
		// new TileSolid({ pos: new Vec(11, 11) }),
		// new TileSolid({ pos: new Vec(12, 11) }),

		new TileSolid({ pos: new Vec(13, 12) }),
		new TileSolid({ pos: new Vec(12, 16) }),
		new TileSolid({ pos: new Vec(11, 16) }),
		new TileSolid({ pos: new Vec(10, 16) }),
		new TileSolid({ pos: new Vec(9, 16) }),
		new TileSolid({ pos: new Vec(13, 16) }),

		new TileSolid({ pos: new Vec(14, 16) }),
		new TileSolid({ pos: new Vec(15, 16) }),
		new TileSolid({ pos: new Vec(16, 16) }),
		new TileSolid({ pos: new Vec(17, 16) }),
		new TileSolid({ pos: new Vec(18, 16) }),
		new TileSolid({ pos: new Vec(19, 16) }),
		new TileSolid({ pos: new Vec(19, 15) }),
		new TileSolid({ pos: new Vec(19, 14) }),
		new TileSolid({ pos: new Vec(19, 13) }),
		new TileSolid({ pos: new Vec(19, 12) }),

		new TileSolid({ pos: new Vec(13, 11) }),
		new TileSolid({ pos: new Vec(14, 11) }),
		new TileSolid({ pos: new Vec(15, 11) }),
		new TileSolid({ pos: new Vec(16, 11) }),
		new TileSolid({ pos: new Vec(17, 11) }),
		new TileSolid({ pos: new Vec(18, 11) }),
		new TileSolid({ pos: new Vec(19, 11) }),
		new TileSolid({ pos: new Vec(20, 11) }),
		new TileSolid({ pos: new Vec(21, 11) }),
		new TileSolid({ pos: new Vec(22, 11) }),
		new TileSolid({ pos: new Vec(23, 11) }),
		new TileSolid({ pos: new Vec(24, 11) }),
		new TileSolid({ pos: new Vec(25, 11) }),

		// right
		new TileSolid({ pos: new Vec(25, 10) }),
		new TileSolid({ pos: new Vec(25, 9) }),
		new TileSolid({ pos: new Vec(25, 8) }),
		new TileSolid({ pos: new Vec(25, 7) }),
		new TileSolid({ pos: new Vec(25, 6) }),
		new TileSolid({ pos: new Vec(25, 5) }),
		new TileSolid({ pos: new Vec(25, 4) }),
		new TileSolid({ pos: new Vec(25, 3) }),
	]
});

world.setMap(map);


let player = new Player(world);
player.pos.set(520, 281);

world.addPlayer(player);
world.setControlPlayer(player);
world.start();

new View('#game-canvas', world);

let i = 0;
document.addEventListener('click', function() {
	if (i === 0) {
		world.preTick();
		i++;
	} else if (i === 1) {
		world.tick();
		i = 0;
	}
});

let debugElem = document.querySelector('#debug');
window.log = function(msg) {
	let str = '';
	for (let arg of arguments) {
		str += JSON.stringify(arg) + ' ';
	}

  debugElem.innerHTML = str;
}
