// js四则运算
/**
 * 加法，计算js中两个数的和
 * @param {Number} arg1 第一个加数
 * @param {Number} arg2 第二个加数
 * @param {Number} d 保留的小数位数，可以不传
 * @returns {Number} 两个数的计算结果
 */
function add(arg1: number | string, arg2: number | string, d: number | undefined): number {
    let arg1Str = arg1.toString();
    let arg2Str = arg2.toString();
    let arg1Arr = arg1Str.split('.');
    let arg2Arr = arg2Str.split('.');
    // 获取小数位数
    let d1 = arg1Arr.length === 2 ? arg1Arr[1] : '';
    let d2 = arg2Arr.length === 2 ? arg2Arr[1] : '';
    let maxLen = Math.max(d1.length, d2.length);
    let m = Math.pow(10, maxLen);
    // 默认按照最长的小数位计算
    let result = Number((((arg1 as number) * m + (arg2 as number) * m) / m).toFixed(maxLen));
    return typeof d === 'number' ? Number(result.toFixed(d)) : result;
}

/**
 * 减法
 * @param 参数与加法一样
 * @returns {number}
 */
function sub(arg1: number | string, arg2: number | string): number {
    return add(arg1, -arg2, arguments[2]);
}

/**
 * 乘法
 * @param 参数与加法一致
 * @returns {number}
 * 计算小数位共多少位， 然后去除小数点进行乘法运算，然后再除以 10 的位数次方
 */
function mul(arg1: number | string, arg2: number | string): number {
    let arg1Str = arg1.toString();
    let arg2Str = arg2.toString();
    let len1 = arg1Str.split('.')[1] ? arg1Str.split('.')[1].length : 0;
    let len2 = arg2Str.split('.')[1] ? arg2Str.split('.')[1].length : 0;
    let  l = len1 + len2;
    let result = Number(arg1Str.replace('.', '')) * Number(arg2Str.replace('.', '')) / Math.pow(10, l);
    let d = arguments[2];
    return typeof d === 'number' ? Number(result.toFixed(d)) : result;
}
/**
 * 除法
 * @param 参数与加法一致
 * @returns {number}
 * 计算分母小数点位数 - 分子小数点位数的差 再 乘以10 的位数次方
 */
function div(arg1: number | string, arg2: number | string): number {
    let arg1Str = arg1.toString();
    let arg2Str = arg2.toString();
    let len1 = arg1Str.split('.')[1] ? arg1Str.split('.')[1].length : 0;
    let len2 = arg2Str.split('.')[1] ? arg2Str.split('.')[1].length : 0;
    let temp = Number(arg1Str.replace('.', '')) / Number(arg2Str.replace('.', ''));
    let result = mul(temp, Math.pow(10, len2 - len1));
    let d = arguments[2];
    return typeof d === 'number' ? Number(result.toFixed(d)) : result;
}

const calc = { add, sub, mul, div };
export default calc;
