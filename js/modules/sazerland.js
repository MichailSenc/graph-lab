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

export default sazerland;
