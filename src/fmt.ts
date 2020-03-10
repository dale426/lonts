
/**
 * 时间格式化
 *
 * @param {*} date 时间对象Date
 * @param {*} fmt
 * @returns
 */
function fmtDate (date: Date, fmt: string): string {
    date = date || new Date();
    fmt = fmt || 'yyyy-MM-dd hh:mm:ss';
    let ob = {
        'M+': date.getMonth() + 1,               //月份
        'd+': date.getDate(),                    //日
        'h+': date.getHours(),                   //小时
        'm+': date.getMinutes(),                 //分
        's+': date.getSeconds(),                 //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        'S': date.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in ob) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (ob[k]) : (('00' + ob[k]).substr(('' + ob[k]).length)));
        }

    }
    return fmt;
}

/**
 *  金钱千分位
 *
 * @param {((number|string))} val 需要转换的数字
 * @param {*} num 千分位 默认3个一位
 */
function fmtMoney(val: (number|string), num: number = 3): string {
    let reg = new RegExp('\\B(?=(?:\\d{' + num + '})+(?!\\d))', 'g');
    return String(val).replace(reg, ',');
}
export { fmtDate, fmtMoney };