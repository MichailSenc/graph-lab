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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bezie = (callstack) => {
    const arr = [];

    const Bezie2Point = () => {
        let t = 0;
        let dt = 1 / Math.abs(Math.abs(callstack[0][0]) - Math.abs(callstack[1][0]));
        while (t < 1) {
            arr.push([
                (1 - t) * callstack[0][0] + t * callstack[1][0],
                (1 - t) * callstack[0][1] + t * callstack[1][1],
            ]);
            t += dt;
        }
    };

    const Bezie3Point = () => {
        let t = 0;
        let dt = 1 / Math.abs(Math.abs(callstack[0][0]) - Math.abs(callstack[2][0]));
        dt/=50;
        while (t < 1) {
            arr.push([
                (1 - t) * (1 - t) * callstack[0][0] + 2 * (1 - t) * t * callstack[1][0] + t * t * callstack[2][0],
                (1 - t) * (1 - t) * callstack[0][1] + 2 * (1 - t) * t * callstack[1][1] + t * t * callstack[2][1],
            ]);
            t += dt;
        }
    };

    const Bezie4Point = () => {
        let t = 0;
        let dt = 1 / Math.abs(Math.abs(callstack[0][0]) - Math.abs(callstack[3][0]));
        dt /=50;
        while (t < 1) {
            arr.push([
                (1 - t) * (1 - t) * (1 - t) * callstack[0][0] +
                    3 * (1 - t) * (1 - t) * t * callstack[1][0] +
                    3 * (1 - t) * t * t * callstack[2][0] +
                    t * t * t * callstack[3][0],
                (1 - t) * (1 - t) * (1 - t) * callstack[0][1] +
                    3 * (1 - t) * (1 - t) * t * callstack[1][1] +
                    3 * (1 - t) * t * t * callstack[2][1] +
                    t * t * t * callstack[3][1],
            ]);
            t += dt;
        }
    };

    switch (callstack.length) {
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
    return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bezie);


/***/ }),

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
        arr.push([x + x1, y + y1]);
        arr.push([x - x1, y + y1]);
        arr.push([x + x1, y - y1]);
        arr.push([x - x1, y - y1]);

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

/***/ "./js/modules/cirus.js":
/*!*****************************!*\
  !*** ./js/modules/cirus.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cirus = ([[x1, y1], [x2, y2]]) => {
    console.log(x1, y1, x2, y2);
    let coordinatesPolygon = [
        { x: 333, y: 200 },
        { x: 333, y: 400 },
        { x: 666, y: 400 },
        { x: 666, y: 200 },
    ];
    let k = coordinatesPolygon.length;
    let d = [x2 - x1, y2 - y1];
    let f = coordinatesPolygon;
    let px, py, px1, py1;
    let normals = [];
    let w;
    let n = coordinatesPolygon.length;
    let tl = 0;
    let tu = 1;
    let Ddotn, Wdotn, t;

    const dotProduct = ([tx1, ty1], [tx2, ty2]) => {
        return tx1 * tx2 + ty1 * ty2;
    };

    console.log(coordinatesPolygon);
    //get normals
    for (let i = 0; i < n - 1; i++) {
        normals.push([
            coordinatesPolygon[i + 1].y - coordinatesPolygon[i].y,
            coordinatesPolygon[i].x - coordinatesPolygon[i + 1].x,
        ]);
    }

    normals.push([
        coordinatesPolygon[0].y - coordinatesPolygon[n - 1].y,
        coordinatesPolygon[n - 1].x - coordinatesPolygon[0].x,
    ]);

    console.log(normals);

    for (let i = 0; i < k; i++) {
        w = [x1 - f[i].x, y1 - f[i].y];

        Ddotn = dotProduct(d, normals[i]);
        Wdotn = dotProduct(w, normals[i]);

        console.log("Ddotn: " + Ddotn);
        console.log("Wdotn " + Wdotn);

        if (Ddotn !== 0) {
            t = (-1 * Wdotn) / Ddotn;
            console.log("t: " + t);

            if (Ddotn > 0) {
                if (t > 1) {
                    return;
                } else {
                    tl = Math.max(t, tl);
                }
            } else {
                if (t < 0) {
                    return;
                } else {
                    tu = Math.min(t, tu);
                }
            }
        } else {
            if (Wdotn < 0) {
                return;
            }
        }
    }
    if (tl <= tu) {
        px = x1 + (x2 - x1) * tl;
        py = y1 + (y2 - y1) * tl;
        px1 = x1 + (x2 - x1) * tu;
        py1 = y1 + (y2 - y1) * tu;
    }

    console.log(px, py, px1, py1);
    return [
        [px, py],
        [px1, py1],
    ];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cirus);

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


/***/ }),

/***/ "./js/modules/midpoint.js":
/*!********************************!*\
  !*** ./js/modules/midpoint.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const midpoint = ([[x1, y1], [x2, y2]], array) => {
    const getCode = (x, y) => {
        let result = 0;
        if (x < 333) result += 1;
        if (x > 666) result += 2;
        if (y < 200) result += 8;
        if (y > 400) result += 4;
        return result;
    };

    const isInside = (x, y) => {
        return x >= 333 && x <= 666 && y >= 200 && y <= 400;
    };

    const arr = array || [];
    if (Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1) return arr;

    if (isInside(x1, y1) && isInside(x2, y2)) {
        arr.push([
            [x1, y1],
            [x2, y2],
        ]);
        return arr;
    }

    let code1 = getCode(x1, y1);
    let code2 = getCode(x2, y2);
    if ((code1 & code2) != 0) return arr;

    midpoint(
        [
            [x1, y1],
            [(x1 + x2) / 2, (y1 + y2) / 2],
        ],
        arr
    );
    midpoint(
        [
            [(x1 + x2) / 2, (y1 + y2) / 2],
            [x2, y2],
        ],
        arr
    );

    return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (midpoint);


/***/ }),

/***/ "./js/modules/notInt.js":
/*!******************************!*\
  !*** ./js/modules/notInt.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const notint = ([[x1, y1], [x2, y2]]) => {
    const arr = [];

    let x = 0;
    let y = 0;
    let a = Math.round(x2 - x1);
    let b = Math.round(y2 - y1);
    let x_mnoj = 1,
        y_mnoj = 1;
    if (a < 0) {
        a = -a;
        x_mnoj = -1;
    }
    if (b < 0) {
        b = -b;
        y_mnoj = -1;
    }
    let c = 1000;
    let dh = c / Math.abs(x2 - x1);
    //  let h = dh*(1-x1);
    let h = 0;
    let dv = c / Math.abs(y2 - y1);
    // let v = dv * (1 - y1);
    let v = 0;
    while (h < c && v < c) {
        arr.push([x * x_mnoj + Math.round(x1), y * y_mnoj + Math.round(y1)]);
        if (h < v) {
            x++;
            h += dh;
        } else if (h > v) {
            y++;
            v += dv;
        } else {
            arr.push([x * x_mnoj + Math.round(x1),(y + 1) * y_mnoj + Math.round(y1)])
            x++;
            y++;
            h += dh;
            v += dv;
        }
    }
    return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notint);


/***/ }),

/***/ "./js/modules/sazerland.js":
/*!*********************************!*\
  !*** ./js/modules/sazerland.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sazerland = ([[x1, y1], [x2, y2]]) => {
    const getCode = (x, y) => {
        let result = 0;
        if (x < 333) result += 1;
        if (x > 666) result += 2;
        if (y < 200) result += 8;
        if (y > 400) result += 4;
        return result;
    };

    const arr = [];

    let code;
    let code1 = getCode(x1, y1);
    let code2 = getCode(x2, y2);

    const LEFT = 1,
        RIGHT = 2,
        BOT = 4,
        TOP = 8;

    let p = {};
    let p1 = { X: x1, Y: y1 };
    let p2 = { X: x2, Y: y2 };

    while (code1 != 0 || code2 != 0) {
        if ((code1 & code2) != 0) return;

        if (code1 != 0) {
            code = code1;
            p = {...p1};
        } else {
            code = code2;
            p = {...p2};
        }

        if ((code & LEFT) != 0) {
            p.Y += ((p1.Y - p2.Y) * (333 - p.X)) / (p1.X - p2.X);
            p.X = 333;
        } else if ((code & RIGHT) != 0) {
            p.Y += ((p1.Y - p2.Y) * (666 - p.X)) / (p1.X - p2.X);
            p.X = 666;
        } else if ((code & BOT) != 0) {
            p.X += ((p1.X - p2.X) * (400 - p.Y)) / (p1.Y - p2.Y);
            p.Y = 400;
        } else if ((code & TOP) != 0) {
            p.X += ((p1.X - p2.X) * (200 - p.Y)) / (p1.Y - p2.Y);
            p.Y = 200;
        }

        if (code == code1) {
            p1 = p;
            code1 = getCode(p1.X, p1.Y);
        } else {
            p2 = p;
            code2 = getCode(p2.X, p2.Y);
        }
    }

    arr.push([
        [p1.X, p1.Y],
        [p2.X, p2.Y],
    ]);
    return arr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sazerland);


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
/* harmony import */ var _modules_bezie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/bezie */ "./js/modules/bezie.js");
/* harmony import */ var _modules_midpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/midpoint */ "./js/modules/midpoint.js");
/* harmony import */ var _modules_sazerland__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sazerland */ "./js/modules/sazerland.js");
/* harmony import */ var _modules_notInt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/notInt */ "./js/modules/notInt.js");
/* harmony import */ var _modules_cirus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/cirus */ "./js/modules/cirus.js");









document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    const clearButton = document.querySelector("#clearButton");
    const dotcount = document.querySelector("#dotcount");
    const bezieSize = document.querySelector("#bezie-size");
    const demPoints = document.querySelector("#dem-points");
    const radios = document.querySelectorAll("[type=radio]");

    // Точки начала и конца (для алгоритма с нецелыми координытами)
    const start1 = document.querySelector("#start-1");
    const start2 = document.querySelector("#start-2");
    const end1 = document.querySelector("#end-1");
    const end2 = document.querySelector("#end-2");
    const notIntButton = document.querySelector("#not-let-button");

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    let callstack = []; // тут будет хранится старые точки
    let checkedID = "brezenheim";

    const clearCanvas = () => {
        canvas
            .getContext("2d")
            .clearRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
        if (checkedID === "sazerland" || checkedID === "midpoint") {
            drawRectangle();
        }
    };

    clearButton.addEventListener("click", clearCanvas);
    radios.forEach((item) =>
        item.addEventListener("change", () => {
            if (item.checked) {
                if (item.getAttribute("id") !== checkedID) {
                    callstack = [];
                    checkedID = item.getAttribute("id");
                    clearCanvas();
                    if (item.getAttribute("type-cut")) {
                        drawRectangle();
                    }
                }
            }
            console.log(checkedID);
            if (checkedID === "bezie") {
                bezieSize.classList.remove("d-none");
                demPoints.classList.add("d-none");
            } else if (checkedID === "not-let") {
                demPoints.classList.remove("d-none");
                bezieSize.classList.add("d-none");
            } else {
                bezieSize.classList.add("d-none");
                demPoints.classList.add("d-none");
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

    canvas.addEventListener("mousemove", (e) => {
        let [x, y] = getCoord(e);
        document.querySelector(".coordinates").innerHTML = `X: ${x}; Y: ${y}`;
    });

    const drawRectangle = () => {
        ctx.beginPath();
        ctx.moveTo(0, 200);
        ctx.lineTo(1000, 200);
        ctx.stroke();

        ctx.moveTo(0, 400);
        ctx.lineTo(1000, 400);
        ctx.stroke();

        ctx.moveTo(333, 0);
        ctx.lineTo(333, 600);
        ctx.stroke();

        ctx.moveTo(666, 0);
        ctx.lineTo(666, 600);
        ctx.stroke();
    };

    const checkNotIntPoints = (element, size) => {
        const match = (element.value || "0").match(/^\s*\d+(\.\d+)?\s*$/im);
        const toD = parseFloat(match);
        console.log("match " + match);
        if (!match || toD < 0 || toD > size) {
            element.classList.add("border", "border-danger");
            setTimeout(() => {
                element.classList.remove("border", "border-danger");
            }, 2000);
        }
        console.log(toD);
        return !!(match && toD >= 0 && toD <= size);
    };

    const parse = (elem) => {
        return parseFloat(elem.value || 0);
    };

    notIntButton.addEventListener("click", () => {
        const b1 = checkNotIntPoints(start1, 1000);
        const b2 = checkNotIntPoints(start2, 1000);
        const b3 = checkNotIntPoints(end1, 600);
        const b4 = checkNotIntPoints(end2, 600);
        const isMatch = b1 && b2 && b3 && b4;
        if (!isMatch) {
            alert(
                "Проверьте на корректность ввод\nКоординаты точек по X должны лежать от 0 до 1000\nКоординаты точек Y должны лежать от 0 до 600"
            );
            return;
        }

        (0,_modules_notInt__WEBPACK_IMPORTED_MODULE_6__.default)([
            [parse(start1), parse(end1)],
            [parse(start2), parse(end2)],
        ]).forEach(([x, y]) => {
            console.log(x, y);
            ctx.fillRect(x, y, 1, 1);
        });
        callstack = [];
    });

    canvas.addEventListener("click", (e) => {
        switch (checkedID) {
            case "brezenheim":
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length === 2) {
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
                    (0,_modules_circle__WEBPACK_IMPORTED_MODULE_2__.default)(callstack).forEach(([x, y]) => {
                        ctx.fillRect(x, y, 1, 1);
                    });
                    console.log(callstack);
                    callstack = [];
                }
                break;
            case "bezie":
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length >= +dotcount.value) {
                    (0,_modules_bezie__WEBPACK_IMPORTED_MODULE_3__.default)(callstack).forEach(([x, y]) => {
                        // console.log(x, y);
                        ctx.fillRect(x, y, 1, 1);
                    });
                    console.log(callstack);
                    callstack = [];
                }
                break;
            case "sazerland":
                console.log("sazerland!");
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length === 2) {
                    const arr = (0,_modules_sazerland__WEBPACK_IMPORTED_MODULE_5__.default)(callstack);
                    console.log(callstack);
                    console.log(arr);
                    (arr || []).forEach(([[x1, y1], [x2, y2]]) => {
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    });
                    callstack = [];
                }
                break;
            case "cirus":
                console.log("cirus");
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length === 2) {
                    console.log(callstack);
                    const arr = (0,_modules_cirus__WEBPACK_IMPORTED_MODULE_7__.default)(callstack);
                    console.log(arr);
                    if (arr) {
                        const [[x11,y11],[x21,y21]] = arr;
                        console.log(x11,y11,x21,y11);
                        ctx.moveTo(x11, y11);
                        ctx.lineTo(x21, y21);
                        ctx.stroke();
                    }
                    callstack = [];
                }
                break;
            case "midpoint":
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length === 2) {
                    const arr = (0,_modules_midpoint__WEBPACK_IMPORTED_MODULE_4__.default)(callstack);
                    console.log(arr);
                    arr.forEach(([[x1, y1], [x2, y2]]) => {
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    });
                    console.log(callstack);
                    callstack = [];
                }
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