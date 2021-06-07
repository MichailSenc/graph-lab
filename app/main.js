/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/brezencheim.js":
/*!***********************************!*\
  !*** ./js/modules/brezencheim.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const brezencheim = ([[x1, y1], [x2, y2]]) => {
    const arr = [];

    const deltaX = Math.abs(x2 - x1);
    const deltaY = Math.abs(y2 - y1);
    const signX = x1 < x2 ? 1 : -1;
    const signY = y1 < y2 ? 1 : -1;
    let error = deltaX - deltaY;
    arr.push([x2, y2]);
    while (x1 != x2 || y1 != y2) {
        arr.push([x1, y1]);
        let error2 = error * 2;
        if (error2 > -deltaY) {
            error -= deltaY;
            x1 += signX;
        }
        if (error2 < deltaX) {
            error += deltaX;
            y1 += signY;
        }
    }

    return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (brezencheim);


/***/ }),

/***/ "./js/modules/circle.js":
/*!******************************!*\
  !*** ./js/modules/circle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const circle = ([[x, y], [xr, yr]]) => {
    let r = Math.sqrt((xr - x) ** 2 + (yr - y) ** 2);
    let x1,
        y1,
        yk = 0;
    let sigma, delta, f;

    let arr = [];

    x1 = 0;
    y1 = r;
    delta = 2 * (1 - r);

    do {
        arr.push(x + x1, y + y1);
        arr.push(x - x1, y + y1);
        arr.push(x + x1, y - y1);
        arr.push(x - x1, y - y1);

        f = 0;
        if (y1 < yk) break;
        if (delta < 0) {
            sigma = 2 * (delta + y1) - 1;
            if (sigma <= 0) {
                x1++;
                delta += 2 * x1 + 1;
                f = 1;
            }
        } else if (delta > 0) {
            sigma = 2 * (delta - x1) - 1;
            if (sigma > 0) {
                y1--;
                delta += 1 - 2 * y1;
                f = 1;
            }
        }
        if (!f) {
            x1++;
            y1--;
            delta += 2 * (x1 - y1 - 1);
        }
    } while (1);
    
    return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (circle);

/***/ }),

/***/ "./js/modules/diff.js":
/*!****************************!*\
  !*** ./js/modules/diff.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const differ = ([[x1, y1], [x2, y2]]) => {
    const arr = [];
    x1 = Math.round(x1);
    x2 = Math.round(x2);
    y1 = Math.round(y1);
    y2 = Math.round(y2);

    const deltaX = Math.abs(x1 - x2);
    const deltaY = Math.abs(y1 - y2);
    let length = Math.max(deltaX, deltaY);

    arr.push([x1, y1]);
    if (length == 0) return;

    let dX = (x2 - x1) / length;
	let dY = (y2 - y1) / length;

    let x = x1;
	let y = y1;
 
    length++;

    while (length--)
	{
		x += dX;
		y += dY;
		arr.push([Math.round(x), Math.round(y)]);
	}

    return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differ);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_brezencheim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/brezencheim */ "./js/modules/brezencheim.js");
/* harmony import */ var _modules_diff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/diff */ "./js/modules/diff.js");
/* harmony import */ var _modules_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/circle */ "./js/modules/circle.js");
// import Bezie from "./modules/bezie";




document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";

    const clearButton = document.querySelector("#clearButton");

    const radios = document.querySelectorAll("[type=radio]");

    let callstack = []; // тут будет хранится старые точки
    let checkedID = "brezenheim";

    clearButton.addEventListener("click", () => {
        canvas
            .getContext("2d")
            .clearRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
    });

    radios.forEach((item) =>
        item.addEventListener("change", () => {
            if (item.checked) {
                if (item.getAttribute("id") !== checkedID) {
                    callstack = [];
                    checkedID = item.getAttribute("id");
                }
            }
        })
    );

    const getCoord = (e) => {
        let x, y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
        return [x, y];
    };

    function windowToCanvas(canvas, x, y) {
        let bbox = canvas.getBoundingClientRect();
        x -= bbox.left * (canvas.width / bbox.width);
        y -= bbox.top * (canvas.height / bbox.height);
        return { x, y };
    }

    canvas.addEventListener("mousemove", (e) => {
        let [ x, y ] = getCoord(e);
        document.querySelector(".coordinates").innerHTML = `X: ${x}; Y: ${y}`;
    });

    canvas.addEventListener("click", (e) => {
        let width = canvas.getBoundingClientRect().width;
        let height = canvas.getBoundingClientRect().height;

        switch (checkedID) {
            case "brezenheim":
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length === 2) {
                    console.log(callstack);
                    (0,_modules_brezencheim__WEBPACK_IMPORTED_MODULE_0__.default)(callstack).forEach(([x, y]) => {
                        ctx.fillRect(x, y, 1, 1);
                    });
                    console.log(callstack);
                    callstack = [];
                }
                break;
            case "differ":
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length === 2) {
                    console.log(callstack);
                    (0,_modules_diff__WEBPACK_IMPORTED_MODULE_1__.default)(callstack).forEach(([x, y]) => {
                        console.log(x, y);
                        ctx.fillRect(x, y, 1, 1);
                    });
                    console.log(callstack);
                    callstack = [];
                }
                break;
            case "circle":
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length === 2) {
                    console.log(callstack);
                    (0,_modules_circle__WEBPACK_IMPORTED_MODULE_2__.default)(callstack).forEach(([x, y]) => {
                        console.log(x, y);
                        ctx.fillRect(x, y, 1, 1);
                    });
                    console.log(callstack);
                    callstack = [];
                }
                break;
            case "bezie":
                console.log("bezie");
                break;
            case "sazerland":
                console.log("saz");
                break;
            case "cirus":
                console.log("cirus");
                break;
            case "midpoint":
                console.log("mid");
                break;
            default:
                break;
        }
    });
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map