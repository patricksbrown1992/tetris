/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/tetris.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const STATUS = {
    PLAYING: 0,
    GAMEOVER: 1,
    MENU: 2,
    PAUSED: 3,
    WIN: 4
}

class Game{
    constructor(canvas, ctx, blocks){
        this.canvas = canvas;
        this.ctx = ctx;
        this.blocks = blocks

        // document.addEventListener('keypress', this.Squirtle.handlePause, false)
    }

   
 
    

    begin(){

        this.menuDraw();

   
    }

    menuDraw() {
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
        // this.ctx.font = "40px Arial";
        // this.ctx.textAlign = "center";
        // this.ctx.fillText("Press Enter to begin", this.canvas.width / 2, 100);
        // this.ctx.fillText("Press Z to shoot", this.canvas.width / 2, 150);
        // this.ctx.fillText("You have 3 bullets at a time", this.canvas.width / 2, 200);
        // this.ctx.fillText("Press left and right to move", this.canvas.width / 2, 250);
        // this.ctx.fillText("Press P to pause", this.canvas.width / 2, 300);
        // this.ctx.fillText("Press M to mute", this.canvas.width / 2, 350);
        
        // let press_m = new Image();
        let press_enter = new Image();
        press_enter.onload = () => {
            this.ctx.fillStyle = "steelblue";
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(press_enter, 0, 0, this.canvas.width, 100);
    
        }
        press_enter.src = './assets/tetris_blocks.png';
    }
    

   


    
}
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./lib/tetris.js":
/*!***********************!*\
  !*** ./lib/tetris.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/game */ "./js/game.js");


document.addEventListener('DOMContentLoaded', () => {
    // const squirtlePhoto = new Image();
    // squirtlePhoto.src = './assets/squirtle.png';
    // const beedrillPhoto = new Image();
    // beedrillPhoto.src = './assets/beedrill.png';
    const blocks = new Image();
    blocks.src = './assets/tetris_blocks.png';
    // const butterfreePhoto = new Image();
    // butterfreePhoto.src = './assets/butterfree.png';
    // // const dragonitePhoto = new Image();
    // // dragonitePhoto.src = './assets/dragonite.png';
    // const gameOverPhoto = new Image();
    // gameOverPhoto.src = './assets/squirtle-fainted.png';
    // const dealWithItPhoto = new Image();
    // dealWithItPhoto.src = './assets/deal-with-it.jpg';
    // const music = document.createElement("audio");
    // music.src = "./assets/battle-music.MP3";
    // const victory = document.createElement("audio");
    // victory.src = './assets/victory.mp3';
    // const heal = document.createElement("audio");
    // heal.src = './assets/heal-squirtle.mp3';
    // const canvas = document.querySelector('canvas');
    // const ctx = canvas.getContext('2d');
    // const watergun = document.createElement("audio");
    // watergun.src = './assets/WaterGun.mp3';
    // const hit = document.createElement("audio");
    // hit.src = './assets/SelfDestruct.mp3';
    // const musicObject = {
    //     music: music,
    //     victory: victory,
    //     heal: heal,
    //     watergun: watergun,
    //     hit: hit
    // }
    const game = new _js_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx, blocks)
    // debugger
    game.begin()

})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map