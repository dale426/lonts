/*!
 * lonts 0.1.0 (https://github.com/dale426/lonts)
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

exports.calc = calc;
