// import Bezie from "./modules/bezie";
import brezencheim from "./modules/brezencheim";
import differ from "./modules/diff"

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
                    brezencheim(callstack).forEach(([x, y]) => {
                        console.log(x, y);
                        ctx.fillRect(x, y, 1, 1);
                    });
                    console.log(callstack);
                    callstack = [];
                }
                break;
            case "diifer":
                callstack.push(getCoord(e));
                // если выбраны 2 точки
                if (callstack.length === 2) {
                    console.log(callstack);
                    differ(callstack).forEach(([x, y]) => {
                        console.log(x, y);
                        ctx.fillRect(x, y, 1, 1);
                    });
                    console.log(callstack);
                    callstack = [];
                }
                break;
            case "circle":
                console.log("cirk");
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
