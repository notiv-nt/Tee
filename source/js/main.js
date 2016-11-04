
import 'styles/main.styl';

import World from './world';
import WorldMap from './map';
import TileSolid from './tiles/TileSolid';
import Vec from './lib/Vec';
import View from './view';


let world = new World();

let map = new WorldMap({
	tiles: [
		new TileSolid({ pos: new Vec(15, 10) }),
		new TileSolid({ pos: new Vec(16, 10) }),
		new TileSolid({ pos: new Vec(17, 10) }),
		new TileSolid({ pos: new Vec(18, 10) }),
		new TileSolid({ pos: new Vec(19, 10) }),
		new TileSolid({ pos: new Vec(20, 10) }),
		new TileSolid({ pos: new Vec(21, 10) }),
		new TileSolid({ pos: new Vec(22, 10) }),
		new TileSolid({ pos: new Vec(23, 10) }),
		new TileSolid({ pos: new Vec(24, 10) }),
		new TileSolid({ pos: new Vec(26, 10) }),
		new TileSolid({ pos: new Vec(27, 10) }),
		new TileSolid({ pos: new Vec(28, 10) }),
		new TileSolid({ pos: new Vec(29, 10) }),
		new TileSolid({ pos: new Vec(30, 10) }),
		new TileSolid({ pos: new Vec(31, 10) }),
		new TileSolid({ pos: new Vec(32, 10) }),
	]
});

let view = new View('#game-canvas', world);

world.setMap(map);
