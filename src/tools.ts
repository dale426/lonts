/**
 * 身份证、手机号脱敏处理
 *
 * @param {string|number} [target=''] 目标字符串
 * @param {number} [start=4] 开始位置
 * @param {number} [end=3] 结束位置
 * @returns {string}
 */
function encrypt(target: (string|number) = '', start: number = 3, end: number = 4): string {
    let reg = new RegExp(`^(\\d{${start}})\\d+(\\w{${end}})$`, 'i');
    let middle = String(target).slice(start, -end).replace(/\w/g, '*');
    return String(target).replace(reg, `$1${middle}$2`);
}
export { encrypt };