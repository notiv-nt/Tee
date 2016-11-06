
export default class Vec {
	constructor(x, y) {

		// new Vec({ x: 14, y: 15 })
		// TODO: and x == object
		if (typeof y === 'undefined') {
			this.x = x.x;
			this.y = x.y;
		}

		// new Vec(14, 15)
		else {
			this.x = x;
			this.y = y;
		}

	}

	multiply(a) {
		this.x *= a;
		this.y *= a;

		return this;
	}

	// TODO: add({ x: , y: })
	add(x, y) {
		this.x += x;
		this.y += y;

		return this;
	}

	copy() {
		return new Vec(this.x, this.y);
	}

	// TODO: set({ x: , y: })
	set(x, y) {
		this.x = x;
		this.y = y;

		return this;
	}
}
