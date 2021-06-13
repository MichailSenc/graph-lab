import brezencheim from "./modules/brezencheim";
import differ from "./modules/diff";
import circle from "./modules/circle";
import bezie from "./modules/bezie";
import midpoint from "./modules/midpoint";
import sazerland from "./modules/sazerland";
import notint from "./modules/notInt";
import cirus from "./modules/cirus";

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

        notint([
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
                    brezencheim(callstack).forEach(([x, y]) => {
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
                    differ(callstack).forEach(([x, y]) => {
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
                    circle(callstack).forEach(([x, y]) => {
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
                    bezie(callstack).forEach(([x, y]) => {
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
                    const arr = sazerland(callstack);
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
                    const arr = cirus(callstack);
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
                    const arr = midpoint(callstack);
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
