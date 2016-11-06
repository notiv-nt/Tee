/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _world = __webpack_require__(5);

	var _world2 = _interopRequireDefault(_world);

	var _map = __webpack_require__(8);

	var _map2 = _interopRequireDefault(_map);

	var _TileSolid = __webpack_require__(9);

	var _TileSolid2 = _interopRequireDefault(_TileSolid);

	var _vec = __webpack_require__(7);

	var _vec2 = _interopRequireDefault(_vec);

	var _view = __webpack_require__(12);

	var _view2 = _interopRequireDefault(_view);

	var _player = __webpack_require__(13);

	var _player2 = _interopRequireDefault(_player);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var world = new _world2.default();

	var map = new _map2.default({
		tiles: [new _TileSolid2.default({ pos: new _vec2.default(3, 8) }), new _TileSolid2.default({ pos: new _vec2.default(4, 8) }), new _TileSolid2.default({ pos: new _vec2.default(5, 8) }), new _TileSolid2.default({ pos: new _vec2.default(6, 8) }), new _TileSolid2.default({ pos: new _vec2.default(7, 8) }), new _TileSolid2.default({ pos: new _vec2.default(8, 8) }), new _TileSolid2.default({ pos: new _vec2.default(9, 8) }), new _TileSolid2.default({ pos: new _vec2.default(10, 8) }), new _TileSolid2.default({ pos: new _vec2.default(11, 8) }), new _TileSolid2.default({ pos: new _vec2.default(12, 8) }), new _TileSolid2.default({ pos: new _vec2.default(14, 8) }), new _TileSolid2.default({ pos: new _vec2.default(15, 8) }), new _TileSolid2.default({ pos: new _vec2.default(16, 8) }), new _TileSolid2.default({ pos: new _vec2.default(17, 8) }), new _TileSolid2.default({ pos: new _vec2.default(18, 8) }), new _TileSolid2.default({ pos: new _vec2.default(19, 8) }), new _TileSolid2.default({ pos: new _vec2.default(20, 8) })]
	});

	world.setMap(map);

	var player = new _player2.default(world);
	player.pos.set(280, 160);

	world.addPlayer(player);
	world.setControlPlayer(player);
	world.start();

	new _view2.default('#game-canvas', world);

	var i = 0;
	document.addEventListener('click', function () {
		if (i === 0) {
			world.preTick();
			i++;
		} else if (i === 1) {
			world.tick();
			i = 0;
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?camelCase&localIdentName=[name]__[local]___[hash:base64:5]!./../../node_modules/postcss-loader/index.js!./../../node_modules/stylus-loader/index.js?resolve url!./main.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?camelCase&localIdentName=[name]__[local]___[hash:base64:5]!./../../node_modules/postcss-loader/index.js!./../../node_modules/stylus-loader/index.js?resolve url!./main.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "*,\n*:before,\n*:after {\n  box-sizing: border-box;\n  cursor: default !important;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nhtml {\n  font: 400 15px/1.4 'Roboto', sans-serif;\n}\nbody {\n  margin: 0;\n}\nhtml,\nbody {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n#debug {\n  position: fixed;\n  z-index: 10;\n  top: 20px;\n  right: 20px;\n  background-color: rgba(0,0,0,0.8);\n  color: #fff;\n  padding: 10px 15px;\n  max-width: 200px;\n  border-radius: 4px;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _input = __webpack_require__(6);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var World = function () {
		function World() {
			_classCallCheck(this, World);

			this.players = [];
			this.map = null;
			// ms
			this.tickInterval = 16;
			// this.tickInterval = 1000;
			this.controlPlayer = null;

			this.input = new _input2.default();
		}

		// prepare data


		_createClass(World, [{
			key: 'preTick',
			value: function preTick() {
				// console.log('World: preTick');

				var players = this.players;

				if (players.length) {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = players[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var player = _step.value;

							player.preTick();
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}
			}

			// calculate everything

		}, {
			key: 'tick',
			value: function tick() {
				// console.log('World: tick');

				var players = this.players;

				if (players.length) {
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = players[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var player = _step2.value;

							player.tick();
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}
			}

			// clear

		}, {
			key: 'postTick',
			value: function postTick() {}
		}, {
			key: 'start',
			value: function start() {
				var _this = this;

				setInterval(function () {
					_this.preTick();
					_this.tick();
					_this.postTick();
				}, this.tickInterval);
			}
		}, {
			key: 'setMap',
			value: function setMap(map) {
				this.map = map;
			}
		}, {
			key: 'addPlayer',
			value: function addPlayer(player) {
				player.world = this;

				// if not exists
				if (this.players.indexOf(player) === -1) {
					this.players.push(player);
				}
			}
		}, {
			key: 'setControlPlayer',
			value: function setControlPlayer(player) {
				this.controlPlayer = player;

				this.bindActions();
			}
		}, {
			key: 'bindActions',
			value: function bindActions() {
				// TODO: rewrite
				// document.addEventListener('keyup', )
			}
		}]);

		return World;
	}();

	exports.default = World;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _vec = __webpack_require__(7);

	var _vec2 = _interopRequireDefault(_vec);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Input = function () {
		function Input() {
			_classCallCheck(this, Input);

			this.mousePos = new _vec2.default(0, 0);
			this.mousePressed = false;
			this.mouseClicked = false;

			this.keys = {};

			this.resetBrowser();
			this.bindMouse();
			this.bindKeyboard();
		}

		_createClass(Input, [{
			key: 'bindMouse',
			value: function bindMouse() {
				var _this = this;

				var doc = document;

				doc.addEventListener('mousemove', function (e) {
					_this.mousePos.set(e.clientX, e.clientY);
				});

				doc.addEventListener('mousedown', function (e) {
					_this.mousePressed = true;
				});
				doc.addEventListener('mouseup', function (e) {
					_this.mousePressed = false;
				});

				// TODO: mouseClickedPos ?
				doc.addEventListener('click', function (e) {
					_this.mouseClicked = true;
				});
			}
		}, {
			key: 'bindKeyboard',
			value: function bindKeyboard() {
				var keys = this.keys;

				document.addEventListener('keydown', function (e) {
					// e.preventDefault();
					// console.log(`KeyCode: ${e.keyCode}, key: ${e.code}`);

					switch (e.keyCode) {
						case 83:
							{
								keys.LEFT = true;
								break;
							}

						case 70:
							{
								keys.RIGHT = true;
								break;
							}

						case 69:
							{
								keys.UP = true;
								break;
							}

						case 68:
							{
								keys.DOWN = true;
								break;
							}
					}
				});

				document.addEventListener('keyup', function (e) {
					switch (e.keyCode) {
						case 83:
							{
								keys.LEFT = false;
								break;
							}

						case 70:
							{
								keys.RIGHT = false;
								break;
							}

						case 69:
							{
								keys.UP = false;
								break;
							}

						case 68:
							{
								keys.DOWN = false;
								break;
							}
					}
				});
			}
		}, {
			key: 'resetBrowser',
			value: function resetBrowser() {
				window.oncontextmenu = function () {
					return false;
				};
			}
		}]);

		return Input;
	}();

	exports.default = Input;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Vec = function () {
		function Vec(x, y) {
			_classCallCheck(this, Vec);

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

		_createClass(Vec, [{
			key: 'multiply',
			value: function multiply(a) {
				this.x *= a;
				this.y *= a;

				return this;
			}

			// TODO: add({ x: , y: })

		}, {
			key: 'add',
			value: function add(x, y) {
				this.x += x;
				this.y += y;

				return this;
			}
		}, {
			key: 'copy',
			value: function copy() {
				return new Vec(this.x, this.y);
			}

			// TODO: set({ x: , y: })

		}, {
			key: 'set',
			value: function set(x, y) {
				this.x = x;
				this.y = y;

				return this;
			}
		}]);

		return Vec;
	}();

	exports.default = Vec;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// hello ES2015's Map/Set
	var WorldMap = function () {
		function WorldMap(data) {
			_classCallCheck(this, WorldMap);

			// TODO:
			this.tiles = data.tiles;
		}

		_createClass(WorldMap, [{
			key: "getTileAt",
			value: function getTileAt(x, y) {
				for (var tile in this.tiles) {
					if (tile.x === x && tile.y === y) {
						return tile;
					}
				}
			}
		}]);

		return WorldMap;
	}();

	exports.default = WorldMap;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _tile = __webpack_require__(10);

	var _tile2 = _interopRequireDefault(_tile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TileSolid = function (_Tile) {
		_inherits(TileSolid, _Tile);

		function TileSolid(props) {
			_classCallCheck(this, TileSolid);

			var _this = _possibleConstructorReturn(this, (TileSolid.__proto__ || Object.getPrototypeOf(TileSolid)).call(this, props));

			_this.type = 'SOLID';
			return _this;
		}

		_createClass(TileSolid, [{
			key: 'render',
			value: function render(ctx) {
				_get(TileSolid.prototype.__proto__ || Object.getPrototypeOf(TileSolid.prototype), 'render', this).call(this, ctx);
			}
		}]);

		return TileSolid;
	}(_tile2.default);

	exports.default = TileSolid;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(11);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tile = function () {
		function Tile(props) {
			_classCallCheck(this, Tile);

			this.width = _config2.default.MAIN_SIZE;
			this.height = _config2.default.MAIN_SIZE;

			this.defaults();

			if (props.pos) {
				this.pos = props.pos.multiply(_config2.default.MAIN_SIZE);
				this._multiplied = true;
			} else if (_config2.default.DEBUG_MAP) {
				console.log(' ');
				console.warn('[Tile]: Following data has no position:');
				console.dir(props);
			}
		}

		_createClass(Tile, [{
			key: 'defaults',
			value: function defaults() {
				this._multiplied = false;
			}
		}, {
			key: 'render',
			value: function render(ctx) {
				if (_config2.default.DEBUG_TILES) {
					ctx.rect(this.pos.x, this.pos.y, _config2.default.MAIN_SIZE, _config2.default.MAIN_SIZE);
					ctx.stroke();
				}
			}
		}]);

		return Tile;
	}();

	exports.default = Tile;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		MAIN_SIZE: 40,

		DEBUG_MAP: true,
		DEBUG_TILES: true,

		GRAVITY: {
			x: 0,
			y: 10
		},

		// TODO: ?
		COLLIDE_SEPARATE_WIDTH: 1
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(11);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var View = function () {
		function View(canvasId, world) {
			_classCallCheck(this, View);

			var canvas = document.querySelector(canvasId);

			this.canvas = canvas;
			this.ctx = canvas.getContext('2d');
			this.width = canvas.width = window.innerWidth;
			this.height = canvas.height = window.innerHeight;
			this.world = world;

			// -_-
			this.render = this.render.bind(this);
			this.init();
		}

		_createClass(View, [{
			key: 'init',
			value: function init() {
				this.render();
			}
		}, {
			key: 'render',
			value: function render() {
				this.ctx.clearRect(0, 0, this.width, this.height);

				this.drawGrid();

				this.temp();

				var map = this.world.map;
				var players = this.world.players;

				if (map) {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = map.tiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var tile = _step.value;

							tile.render(this.ctx);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}

				if (players && players.length) {
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = players[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var player = _step2.value;

							player.render(this.ctx);
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}
				}

				// setTimeout(this.render, 10);
				requestAnimationFrame(this.render);
			}
		}, {
			key: 'drawGrid',
			value: function drawGrid() {
				var ctx = this.ctx;
				var prev_StrokeStyle = ctx.strokeStyle;

				ctx.strokeStyle = 'rgba(160, 160, 160, .8)';

				// draw x grid
				for (var i = 0; i < this.height; i += _config2.default.MAIN_SIZE) {
					ctx.beginPath();
					ctx.moveTo(0, i);
					ctx.lineTo(this.width, i);
					ctx.stroke();
					ctx.closePath();
				}

				// draw y grid
				for (var i = 0; i < this.width; i += _config2.default.MAIN_SIZE) {
					ctx.beginPath();
					ctx.moveTo(i, 0);
					ctx.lineTo(i, this.height);
					ctx.stroke();
					ctx.closePath();
				}

				ctx.strokeStyle = prev_StrokeStyle;
			}
		}, {
			key: 'temp',
			value: function temp() {
				var ctx = this.ctx;
				var world = this.world;
				var input = world.input;
				var player = world.controlPlayer;

				var cursor = {
					x: input.mousePos.x,
					y: input.mousePos.y
				};

				var prev_StrokeStyle = ctx.strokeStyle;

				ctx.strokeStyle = 'red';

				ctx.beginPath();

				// top left
				ctx.moveTo(player.pos.x, player.pos.y);
				ctx.lineTo(cursor.x, cursor.y);
				ctx.stroke();

				// top right
				ctx.moveTo(player.pos.x + player.width, player.pos.y);
				ctx.lineTo(cursor.x + player.width, cursor.y);
				ctx.stroke();

				// bottom left
				ctx.moveTo(player.pos.x, player.pos.y + player.height);
				ctx.lineTo(cursor.x, cursor.y + player.height);
				ctx.stroke();

				// bottom right
				ctx.moveTo(player.pos.x + player.width, player.pos.y + player.height);
				ctx.lineTo(cursor.x + player.width, cursor.y + player.height);
				ctx.stroke();

				ctx.closePath();

				ctx.strokeStyle = prev_StrokeStyle;
			}
		}]);

		return View;
	}();

	exports.default = View;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _config = __webpack_require__(11);

	var _config2 = _interopRequireDefault(_config);

	var _vec = __webpack_require__(7);

	var _vec2 = _interopRequireDefault(_vec);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Player = function () {
		function Player(world) {
			_classCallCheck(this, Player);

			this.pos = new _vec2.default(0, 0);
			this.nextPos = new _vec2.default(0, 0);
			this.width = _config2.default.MAIN_SIZE - 1;
			this.height = _config2.default.MAIN_SIZE - 1;
			this.speed = new _vec2.default(0, 0);
			this.world = world;

			// TEMP:
			this.drawCollisions = [];
		}

		_createClass(Player, [{
			key: 'preTick',
			value: function preTick() {
				this.drawCollisions = [];
				var input = this.world.input;

				// this.nextPos = this.pos.copy();
				this.nextPos = this.world.input.mousePos;

				if (input.keys.LEFT) {
					this.nextPos.x -= 5;
				}

				if (input.keys.RIGHT) {
					this.nextPos.x += 5;
				}

				if (input.keys.UP) {
					this.nextPos.y -= 5;
				}

				if (input.keys.DOWN) {
					this.nextPos.y += 5;
				}

				this.checkCollide2();

				// 	.add(config.GRAVITY.x, config.GRAVITY.y);
			}
		}, {
			key: 'tick',
			value: function tick() {
				// console.log(`From: ${this.pos.x} ${this.pos.y}, to: ${this.nextPos.x} ${this.nextPos.y}`);
				// this.pos = this.nextPos;
			}
		}, {
			key: 'checkCollide2',
			value: function checkCollide2() {
				var _from = this.pos;
				var _to = this.nextPos;

				// корень из суммы квадратов координат
				var len = Math.round(Math.sqrt(Math.pow(Math.abs(_to.x - _from.x), 2) + Math.pow(Math.abs(_to.y - _from.y), 2)));

				var checkedPos = [];

				for (var i = 0; i < len; i += _config2.default.COLLIDE_SEPARATE_WIDTH) {
					var sinA = -(_from.x - _to.x) / Math.sqrt(Math.pow(_from.x - _to.x, 2) + Math.pow(_from.y - _to.y, 2));

					var cosA = -(_from.y - _to.y) / Math.sqrt(Math.pow(_from.x - _to.x, 2) + Math.pow(_to.y - _from.y, 2));

					// TODO: .round ?
					var nextX = Math.round(_from.x + sinA * i);
					var nextY = Math.round(_from.y + cosA * i);

					var coordsStr = nextX + ':' + nextY;

					if (!checkedPos[coordsStr]) {

						// just something, 1 просто для минимального ресурса памяти
						checkedPos[coordsStr] = 1;
					} else {}

					coords.push(nextX + ': ' + nextY);
					// let drawingTileCoords = normalizeCorrdsToTile(_from.x + sinA * i, _from.y + cosA * i);
					// let checkedStr = `${drawingTileCoords.x}:${drawingTileCoords.y}`;

					// if (checkedTiles.indexOf(checkedStr) === -1) {
					// 	checkedTiles.push(checkedStr);
					// 	this.drawCollisions.push({ x: drawingTileCoords.x, y: drawingTileCoords.y });
					// }
				}

				document.querySelector('#debug').innerHTML = coords.join('<br>');
			}
		}, {
			key: 'checkCollide',
			value: function checkCollide() {
				var _to = this.nextPos;

				var edgesToCheck = [];

				// идем вправо
				if (this.nextPos.x > this.pos.x) {

					// и вверх
					if (this.nextPos.y < this.pos.y) {
						edgesToCheck.push(
						// правый верхний
						{
							x: this.pos.x + this.width + 1,
							y: this.pos.y - 1
						},
						// левый верхний
						{
							x: this.pos.x,
							y: this.pos.y - 1
						},
						// правый нижний
						{
							x: this.pos.x + this.width + 1,
							y: this.pos.y + this.height
						});
					}

					// или вниз
					else if (this.nextPos.y > this.pos.y) {
							edgesToCheck.push(
							// правый нижний
							{
								x: this.pos.x + this.width + 1,
								y: this.pos.y + this.height + 1
							},
							// левый нижний
							{
								x: this.pos.x,
								y: this.pos.y + this.height + 1
							},
							// правый верхний
							{
								x: this.pos.x + this.width + 1,
								y: this.pos.y + this.height
							});
						}

						// ровно вправо
						else {
								edgesToCheck.push(
								// right top
								{ x: this.pos.x + this.width + 1, y: this.pos.y },
								// right bottom
								{ x: this.pos.x + this.width + 1, y: this.pos.y + this.height });
							}
				}

				// идем влево
				else if (this.nextPos.x < this.pos.x) {

						// и вверх
						if (this.nextPos.y < this.pos.y) {
							edgesToCheck.push(
							// левый верхний
							{
								x: this.pos.x - 1,
								y: this.pos.y - 1
							},
							// левый нижний
							{
								x: this.pos.x - 1,
								y: this.pos.y
							},
							// правый верхний
							{
								x: this.pos.x + this.width,
								y: this.pos.y - 1
							});
						}

						// или вниз
						else if (this.nextPos.y > this.pos.y) {
								edgesToCheck.push(
								// левый нижний
								{
									x: this.pos.x + this.width - 1,
									y: this.pos.y + this.height + 1
								},
								// левый верхний
								{
									x: this.pos.x,
									y: this.pos.y
								},
								// правый нижний
								{
									x: this.pos.x + this.width,
									y: this.pos.y + this.height + 1
								});
							}

							// ровно влево
							else {
									edgesToCheck.push(
									// левый верхний
									{ x: this.pos.x - 1, y: this.pos.y },
									// левый нижний
									{ x: this.pos.x - 1, y: this.pos.y + this.height });
								}
					}

					// идем по вертикали ровно вверх\вниз
					else if (this.nextPos.x === this.pos.x) {

							// вверх
							if (this.nextPos.y < this.pos.y) {
								edgesToCheck.push(
								// левый верхний
								{
									x: this.pos.x,
									y: this.pos.y - 1
								},
								// правый верхний
								{
									x: this.pos.x + this.width,
									y: this.pos.y - 1
								});
							}

							// вниз
							else if (this.nextPos.y > this.pos.y) {
									edgesToCheck.push(
									// левый нижний
									{
										x: this.pos.x,
										y: this.pos.y + this.height + 1
									},
									// правый нижний
									{
										x: this.pos.x + this.width,
										y: this.pos.y + this.height + 1
									});
								}
						}

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = edgesToCheck[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var edge = _step.value;

						var _from = edge;

						// корень из суммы квадратов координат
						var len = Math.round(Math.sqrt(Math.pow(Math.abs(_to.x - _from.x), 2) + Math.pow(Math.abs(_to.y - _from.y), 2)));

						var checkedTiles = [];
						for (var i = 0; i < len; i += _config2.default.COLLIDE_SEPARATE_WIDTH) {
							var sinA = -(_from.x - _to.x) / Math.sqrt(Math.pow(_from.x - _to.x, 2) + Math.pow(_from.y - _to.y, 2));

							var cosA = -(_from.y - _to.y) / Math.sqrt(Math.pow(_from.x - _to.x, 2) + Math.pow(_to.y - _from.y, 2));

							var drawingTileCoords = normalizeCorrdsToTile(_from.x + sinA * i, _from.y + cosA * i);
							var checkedStr = drawingTileCoords.x + ':' + drawingTileCoords.y;

							if (checkedTiles.indexOf(checkedStr) === -1) {
								checkedTiles.push(checkedStr);
								this.drawCollisions.push({ x: drawingTileCoords.x, y: drawingTileCoords.y });
							}
						}
					}

					// drawCollisionRectangle(posTo.x, posTo.y);
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				function normalizeCorrdsToTile(x, y) {
					return {
						x: x - x % _config2.default.MAIN_SIZE,
						y: y - y % _config2.default.MAIN_SIZE
					};
				}
			}
		}, {
			key: 'render',
			value: function render(ctx) {
				var prev_strokeStyle = ctx.strokeStyle;

				ctx.strokeStyle = 'rgba(0, 0, 0, .8)';
				// ctx.rect(this.pos.x, this.pos.y, config.MAIN_SIZE, config.MAIN_SIZE);
				// ctx.stroke();

				ctx.strokeStyle = prev_strokeStyle;

				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = this.drawCollisions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var i = _step2.value;

						// console.log(i.x, i.y);
						drawCollisionRectangle(i.x, i.y);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				function drawCollisionRectangle(x, y) {
					var prevStrokeStyle = ctx.strokeStyle;
					var prevlineWidth = ctx.lineWidth;

					ctx.strokeStyle = 'rgba(234, 44, 80, 1)';
					ctx.lineWidth = 1;
					ctx.strokeRect(x, y, _config2.default.MAIN_SIZE, _config2.default.MAIN_SIZE);
					ctx.strokeStyle = prevStrokeStyle;
					ctx.lineWidth = prevlineWidth;
				}
			}
		}]);

		return Player;
	}();

	exports.default = Player;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map