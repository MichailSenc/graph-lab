const notcell = ([[x1, y1], [x2, y2]]) => {
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

export default notcell;
