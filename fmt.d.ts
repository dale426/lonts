/**
 * 时间格式化
 *
 * @param {*} date 时间对象Date
 * @param {*} fmt
 * @returns
 */
declare function fmtDate(date: Date, fmt: string): string;
/**
 *  金钱千分位
 *
 * @param {((number|string))} val 需要转换的数字
 * @param {*} num 千分位 默认3个一位
 */
declare function fmtMoney(val: (number | string), num?: number): string;
export { fmtDate, fmtMoney };
