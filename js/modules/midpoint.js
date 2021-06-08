

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

    midpoint([
        [x1, y1],
        [(x1 + x2) / 2, (y1 + y2) / 2],
    ], arr);
    midpoint([
        [(x1 + x2) / 2, (y1 + y2) / 2],
        [x2, y2],
    ], arr);

    return arr;
};

export default midpoint;
