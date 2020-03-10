/*!
 * lonts 0.1.2 (https://github.com/dale426/lonts)
 * API https://github.com/dale426/lonts/blob/master/doc/api.md
 * Copyright 2017-2020 dale426. All Rights Reserved
 * Licensed under MIT (https://github.com/dale426/lonts/blob/master/LICENSE)
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// js四则运算
/**
 * 加法，计算js中两个数的和
 * @param {Number} arg1 第一个加数
 * @param {Number} arg2 第二个加数
 * @param {Number} d 保留的小数位数，可以不传
 * @returns {Number} 两个数的计算结果
 */
function add(arg1, arg2, d) {
    var arg1Str = arg1.toString();
    var arg2Str = arg2.toString();
    var arg1Arr = arg1Str.split('.');
    var arg2Arr = arg2Str.split('.');
    // 获取小数位数
    var d1 = arg1Arr.length === 2 ? arg1Arr[1] : '';
    var d2 = arg2Arr.length === 2 ? arg2Arr[1] : '';
    var maxLen = Math.max(d1.length, d2.length);
    var m = Math.pow(10, maxLen);
    // 默认按照最长的小数位计算
    var result = Number(((arg1 * m + arg2 * m) / m).toFixed(maxLen));
    return typeof d === 'number' ? Number(result.toFixed(d)) : result;
}
/**
 * 减法
 * @param 参数与加法一样
 * @returns {number}
 */
function sub(arg1, arg2) {
    return add(arg1, -arg2, arguments[2]);
}
/**
 * 乘法
 * @param 参数与加法一致
 * @returns {number}
 * 计算小数位共多少位， 然后去除小数点进行乘法运算，然后再除以 10 的位数次方
 */
function mul(arg1, arg2) {
    var arg1Str = arg1.toString();
    var arg2Str = arg2.toString();
    var len1 = arg1Str.split('.')[1] ? arg1Str.split('.')[1].length : 0;
    var len2 = arg2Str.split('.')[1] ? arg2Str.split('.')[1].length : 0;
    var l = len1 + len2;
    var result = Number(arg1Str.replace('.', '')) * Number(arg2Str.replace('.', '')) / Math.pow(10, l);
    var d = arguments[2];
    return typeof d === 'number' ? Number(result.toFixed(d)) : result;
}
/**
 * 除法
 * @param 参数与加法一致
 * @returns {number}
 * 计算分母小数点位数 - 分子小数点位数的差 再 乘以10 的位数次方
 */
function div(arg1, arg2) {
    var arg1Str = arg1.toString();
    var arg2Str = arg2.toString();
    var len1 = arg1Str.split('.')[1] ? arg1Str.split('.')[1].length : 0;
    var len2 = arg2Str.split('.')[1] ? arg2Str.split('.')[1].length : 0;
    var temp = Number(arg1Str.replace('.', '')) / Number(arg2Str.replace('.', ''));
    var result = mul(temp, Math.pow(10, len2 - len1));
    var d = arguments[2];
    return typeof d === 'number' ? Number(result.toFixed(d)) : result;
}
var calc = { add: add, sub: sub, mul: mul, div: div };

/**
 * 时间格式化
 *
 * @param {*} date 时间对象Date
 * @param {*} fmt
 * @returns
 */
function fmtDate(date, fmt) {
    date = date || new Date();
    fmt = fmt || 'yyyy-MM-dd hh:mm:ss';
    var ob = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in ob) {
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
function fmtMoney(val, num) {
    if (num === void 0) { num = 3; }
    var reg = new RegExp('\\B(?=(?:\\d{' + num + '})+(?!\\d))', 'g');
    return String(val).replace(reg, ',');
}

/**
 * 身份证、手机号脱敏处理
 *
 * @param {string|number} [target=''] 目标字符串
 * @param {number} [start=4] 开始位置
 * @param {number} [end=3] 结束位置
 * @returns {string}
 */
function encrypt(target, start, end) {
    if (target === void 0) { target = ''; }
    if (start === void 0) { start = 3; }
    if (end === void 0) { end = 4; }
    var reg = new RegExp("^(\\d{" + start + "})\\d+(\\w{" + end + "})$", 'i');
    var middle = String(target).slice(start, -end).replace(/\w/g, '*');
    return String(target).replace(reg, "$1" + middle + "$2");
}

var index = { calc: calc, fmtDate: fmtDate, fmtMoney: fmtMoney, encrypt: encrypt };

exports.calc = calc;
exports.fmtDate = fmtDate;
exports.fmtMoney = fmtMoney;
exports.encrypt = encrypt;
exports.default = index;
