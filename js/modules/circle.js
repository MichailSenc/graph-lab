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

export default circle;