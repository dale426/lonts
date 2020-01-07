/**
 * 加法，计算js中两个数的和
 * @param {Number} arg1 第一个加数
 * @param {Number} arg2 第二个加数
 * @param {Number} d 保留的小数位数，可以不传
 * @returns {Number} 两个数的计算结果
 */
declare function add(arg1: number | string, arg2: number | string, d: number | undefined): number;
declare const calc: {
    add: typeof add;
};
export default calc;
