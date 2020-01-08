# 文档
这是一个前端开发常用工具库

## api模版
#### 四则运算
```js
/**
 * 加法，计算js中两个数的和
 * @param {Number} arg1 第一个加数
 * @param {Number} arg2 第二个加数
 * @param {Number} d 保留的小数位数，可以不传
 * @returns {Number} 两个数的计算结果
 */
declare function add(arg1: number | string, arg2: number | string, d: number | undefined): number;
/**
 * 减法
 * @param 参数与加法一样
 * @returns {number}
 */
declare function sub(arg1: number | string, arg2: number | string): number;
/**
 * 乘法
 * @param 参数与加法一致
 * @returns {number}
 * 计算小数位共多少位， 然后去除小数点进行乘法运算，然后再除以 10 的位数次方
 */
declare function mul(arg1: number | string, arg2: number | string): number;
/**
 * 除法
 * @param 参数与加法一致
 * @returns {number}
 * 计算分母小数点位数 - 分子小数点位数的差 再 乘以10 的位数次方
 */
declare function div(arg1: number | string, arg2: number | string): number;
```
