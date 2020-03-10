/**
 * 身份证、手机号脱敏处理
 *
 * @param {string|number} [target=''] 目标字符串
 * @param {number} [start=4] 开始位置
 * @param {number} [end=3] 结束位置
 * @returns {string}
 */
declare function encrypt(target?: (string | number), start?: number, end?: number): string;
export { encrypt };
