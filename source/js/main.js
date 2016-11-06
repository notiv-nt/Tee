
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
		new TileSolid({ pos: new Vec(3, 8) }),
		new TileSolid({ pos: new Vec(4, 8) }),
		new TileSolid({ pos: new Vec(5, 8) }),
		new TileSolid({ pos: new Vec(6, 8) }),
		new TileSolid({ pos: new Vec(7, 8) }),
		new TileSolid({ pos: new Vec(8, 8) }),
		new TileSolid({ pos: new Vec(9, 8) }),
		new TileSolid({ pos: new Vec(10, 8) }),
		new TileSolid({ pos: new Vec(11, 8) }),
		new TileSolid({ pos: new Vec(12, 8) }),
		new TileSolid({ pos: new Vec(14, 8) }),
		new TileSolid({ pos: new Vec(15, 8) }),
		new TileSolid({ pos: new Vec(16, 8) }),
		new TileSolid({ pos: new Vec(17, 8) }),
		new TileSolid({ pos: new Vec(18, 8) }),
		new TileSolid({ pos: new Vec(19, 8) }),
		new TileSolid({ pos: new Vec(20, 8) })
	]
});

world.setMap(map);


let player = new Player(world);
player.pos.set(280, 160);

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
