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

export default cirus;