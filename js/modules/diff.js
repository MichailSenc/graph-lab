const differ = ([[x1, y1], [x2, y2]]) => {
    const arr = [];
    x1 = Math.round(x1);
    x2 = Math.round(x2);
    y1 = Math.round(y1);
    y2 = Math.round(y2);

    const deltaX = Math.abs(x1 - x2);
    const deltaY = Math.abs(y1 - y2);
    let length = Math.max(deltaX, deltaY);

    arr.push([x1, y1]);
    if (length == 0) return;

    let dX = (x2 - x1) / length;
	let dY = (y2 - y1) / length;

    let x = x1;
	let y = y1;
 
    length++;

    while (length--)
	{
		x += dX;
		y += dY;
		arr.push([Math.round(x), Math.round(y)]);
	}

    return arr;
};

export default differ;
