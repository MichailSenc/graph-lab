const bezie = (callstack) => {
    const arr = [];

    const Bezie2Point = () => {
        let t = 0;
        let dt = 1 / Math.abs(Math.abs(callstack[0][0]) - Math.abs(callstack[1][0]));
        while (t < 1) {
            arr.push([
                (1 - t) * callstack[0][0] + t * callstack[1][0],
                (1 - t) * callstack[0][1] + t * callstack[1][1],
            ]);
            t += dt;
        }
    };

    const Bezie3Point = () => {
        let t = 0;
        let dt = 1 / Math.abs(Math.abs(callstack[0][0]) - Math.abs(callstack[2][0]));
        dt/=50;
        while (t < 1) {
            arr.push([
                (1 - t) * (1 - t) * callstack[0][0] + 2 * (1 - t) * t * callstack[1][0] + t * t * callstack[2][0],
                (1 - t) * (1 - t) * callstack[0][1] + 2 * (1 - t) * t * callstack[1][1] + t * t * callstack[2][1],
            ]);
            t += dt;
        }
    };

    const Bezie4Point = () => {
        let t = 0;
        let dt = 1 / Math.abs(Math.abs(callstack[0][0]) - Math.abs(callstack[3][0]));
        dt /=50;
        while (t < 1) {
            arr.push([
                (1 - t) * (1 - t) * (1 - t) * callstack[0][0] +
                    3 * (1 - t) * (1 - t) * t * callstack[1][0] +
                    3 * (1 - t) * t * t * callstack[2][0] +
                    t * t * t * callstack[3][0],
                (1 - t) * (1 - t) * (1 - t) * callstack[0][1] +
                    3 * (1 - t) * (1 - t) * t * callstack[1][1] +
                    3 * (1 - t) * t * t * callstack[2][1] +
                    t * t * t * callstack[3][1],
            ]);
            t += dt;
        }
    };

    switch (callstack.length) {
        case 2:
            Bezie2Point();
            break;
        case 3:
            Bezie3Point();
            break;
        case 4:
            Bezie4Point();
            break;
    }   
    return arr;
};

export default bezie;
