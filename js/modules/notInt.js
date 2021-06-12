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

export default notint;
