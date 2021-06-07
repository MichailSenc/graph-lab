import Bezie from "./modules/bezie";

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
