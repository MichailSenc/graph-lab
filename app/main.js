/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/bezie.js":
/*!*****************************!*\
  !*** ./js/modules/bezie.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bezie)
/* harmony export */ });
class Bezie {
    constructor() {
        this.array_x = [];
        this.array_y = [];
        this.array_finish_x = [];
        this.array_finish_y = [];
    }

    SetArray_x = (x) => {
        array_x.push(x);
    };
    SetArray_y = (x) => {
        array_y.push(x);
    };
    GetArray_x = () => {
        return array_finish_x;
    };
    GetArray_y = () => {
        return array_finish_y;
    };

    //алгоритм для двух точек
    DrowBezie = () => {
        switch (array_x.Count()) {
            case 2:
                Bezie2Point();
                break;
            case 3:
                Bezie3Point();
                break;
            case 4:
                Bezie4Point();
                break;
        }
    };

    Bezie2Point = () => {
        let t = 0;
        //приращение
        let dt = 1 / Math.Abs(Math.Abs(array_x[0]) - Math.Abs(array_x[1]));
        while (t < 1) {
            //формула для  2 точек
            array_push_x.push(int((1 - t) * array_x[0] + t * array_x[1]));
            array_finish_y.push(int((1 - t) * array_y[0] + t * array_y[1]));
            t += dt;
        }
    };

    Bezie3Point = () => {
        let t = 0;
        //приращение
        let dt = 1 / Math.Abs(Math.Abs(array_x[0]) - Math.Abs(array_x[2]));
        while (t < 1) {
            //формула для  2 точек
            array_finish_x.push(
                int((1 - t) * (1 - t) * array_x[0] + 2 * (1 - t) * t * array_x[1] + t * t * array_x[2])
            );
            array_finish_y.push(
                int((1 - t) * (1 - t) * array_y[0] + 2 * (1 - t) * t * array_y[1] + t * t * array_y[2])
            );
            t += dt;
        }
    };

    Bezie4Point = () => {
        let t = 0;
        //приращение
        let dt = 1 / Math.Abs(Math.Abs(array_x[0]) - Math.Abs(array_x[3]));
        while (t < 1) {
            //формула для  2 точек
            array_finish_x.push(
                int(
                    (1 - t) * (1 - t) * (1 - t) * array_x[0] +
                        3 * (1 - t) * (1 - t) * t * array_x[1] +
                        3 * (1 - t) * t * t * array_x[2] +
                        t * t * t * array_x[3]
                )
            );
            array_finish_y.push(
                int(
                    (1 - t) * (1 - t) * (1 - t) * array_y[0] +
                        3 * (1 - t) * (1 - t) * t * array_y[1] +
                        3 * (1 - t) * t * t * array_y[2] +
                        t * t * t * array_y[3]
                )
            );
            t += dt;
        }
    };
}


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
/* harmony import */ var _modules_bezie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/bezie */ "./js/modules/bezie.js");


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    const radios = document.querySelectorAll("[type=radio]");

    canvas.addEventListener("click", () => {
        let id = null;
        radios.forEach((item) => {
            if (item.checked) id = item.getAttribute("id");
        });

        switch (id) {
            case "brezenheim":
                break;
            case "diifer":
                break;
            case "circle":
                break;
            case "bezie":
                break;
            case "sazerland":
                break;
            case "cirus":
                break;
            case "midpoint":
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