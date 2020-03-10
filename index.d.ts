import calc from './calc';
import { fmtDate, fmtMoney } from './fmt';
import { encrypt } from './tools';
export { calc, fmtDate, fmtMoney, encrypt };
declare const _default: {
    calc: {
        add: (arg1: string | number, arg2: string | number, d: number) => number;
        sub: (arg1: string | number, arg2: string | number) => number;
        mul: (arg1: string | number, arg2: string | number) => number;
        div: (arg1: string | number, arg2: string | number) => number;
    };
    fmtDate: typeof fmtDate;
    fmtMoney: typeof fmtMoney;
    encrypt: typeof encrypt;
};
export default _default;
