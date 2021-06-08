import brezencheim from "./modules/brezencheim";
import differ from "./modules/diff";
import circle from "./modules/circle";
import bezie from "./modules/bezie";
import midpoint from "./modules/midpoint";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";

    const clearButton = document.querySelector("#clearButton");
    const dotcount = document.querySelector("#dotcount");

    const radios = document.querySelectorAll("[type=radio]");

    let callstack = []; // тут будет хранится старые точки
    let checkedID = "brezenheim";

    const clearCanvas = () => {
        canvas
            .getContext("2d")
            .clearRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
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

    canvas.addEventListener("click", (e) => {
        let width = canvas.getBoundingClientRect().width;
        let height = canvas.getBoundingClientRect().height;

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
                        console.log(x, y);
                        ctx.fillRect(x, y, 1, 1);
                    });
                    console.log(callstack);
                    callstack = [];
                }
                break;
            case "sazerland":
                console.log("saz");
                break;
            case "cirus":
                console.log("cirus");
                break;
            case "midpoint":
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length === 2) {
                    const arr = midpoint(callstack);
                    console.log(arr);
                    arr.forEach(([[x1, y1], [x2, y2]]) => {
                        ctx.moveTo(x1,y1);
                        ctx.lineTo(x2,y2);
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
