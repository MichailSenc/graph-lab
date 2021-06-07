export default class Bezie {
    constructor() {
        this.array_x = [];
        this.array_y = [];
        this.array_finish_x = [];
        this.array_finish_y = [];
    }

    SetArray_x = (x) => {
        array_x.push(x);
    };
    SetArray_y = (x) => {
        array_y.push(x);
    };
    GetArray_x = () => {
        return array_finish_x;
    };
    GetArray_y = () => {
        return array_finish_y;
    };

    //алгоритм для двух точек
    DrowBezie = () => {
        switch (this.array_x.Count()) {
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
    };

    Bezie2Point = () => {
        let t = 0;
        //приращение
        let dt = 1 / Math.Abs(Math.Abs(array_x[0]) - Math.Abs(array_x[1]));
        while (t < 1) {
            //формула для  2 точек
            array_push_x.push(int((1 - t) * array_x[0] + t * array_x[1]));
            array_finish_y.push(int((1 - t) * array_y[0] + t * array_y[1]));
            t += dt;
        }
    };

    Bezie3Point = () => {
        let t = 0;
        //приращение
        let dt = 1 / Math.Abs(Math.Abs(array_x[0]) - Math.Abs(array_x[2]));
        while (t < 1) {
            //формула для  2 точек
            array_finish_x.push(
                int((1 - t) * (1 - t) * array_x[0] + 2 * (1 - t) * t * array_x[1] + t * t * array_x[2])
            );
            array_finish_y.push(
                int((1 - t) * (1 - t) * array_y[0] + 2 * (1 - t) * t * array_y[1] + t * t * array_y[2])
            );
            t += dt;
        }
    };

    Bezie4Point = () => {
        let t = 0;
        //приращение
        let dt = 1 / Math.Abs(Math.Abs(array_x[0]) - Math.Abs(array_x[3]));
        while (t < 1) {
            //формула для  2 точек
            array_finish_x.push(
                int(
                    (1 - t) * (1 - t) * (1 - t) * array_x[0] +
                        3 * (1 - t) * (1 - t) * t * array_x[1] +
                        3 * (1 - t) * t * t * array_x[2] +
                        t * t * t * array_x[3]
                )
            );
            array_finish_y.push(
                int(
                    (1 - t) * (1 - t) * (1 - t) * array_y[0] +
                        3 * (1 - t) * (1 - t) * t * array_y[1] +
                        3 * (1 - t) * t * t * array_y[2] +
                        t * t * t * array_y[3]
                )
            );
            t += dt;
        }
    };
}
