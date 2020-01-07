var expect = require('expect.js');

// ts 测试编译后文件
var lonts = require('../src/index.ts');
console.log('lonts', lonts);

describe('四则运算', function() {
    describe('加法运算', function() {
        it('1 + 2 应该等于 3', function() {
            expect(lonts.calc.add(1, 2)).to.equal(3);
        });
        it('2.33 + 1.0999 应该等于 3.4299', function() {
            expect(lonts.calc.add('2.33', '1.0999')).to.equal(3.4299);
        });
        it('保留3位小数', function() {
            expect(lonts.calc.add('2.33', 1.0999, 3)).to.equal(3.43);
        });
    });
    describe('减法运算', function() {
        it('0.3 - 0.1 应该等于 0.2', function() {
            expect(lonts.calc.sub(0.3, 0.2)).to.equal(0.1);
        });
        it('字符串0.3 - 0.2 应该等于 0.1', function() {
            expect(lonts.calc.sub('0.3', '0.2')).to.equal(0.1);
        });
        it('保留3位小数0.3013 - 0.2001', function() {
            expect(lonts.calc.sub('0.3013', '0.2001', 3)).to.equal(0.101);
        });
    });
    describe('乘法运算', function() {
        it('23.223 * 9.5 应该等于 220.6185', function() {
            expect(lonts.calc.mul(23.223, 9.5)).to.equal(220.6185);
        });
        it('6 * 0.7 应该等于 4.2', function() {
            expect(lonts.calc.mul(6, 0.7)).to.equal(4.2);
        });
        it('0.7 * 6 应该等于 4.2', function() {
            expect(lonts.calc.mul(0.7, 6)).to.equal(4.2);
        });
        it('字符串23.223 * 9.5[保留3位小数] 应该等于 220.619', function() {
            expect(lonts.calc.mul('23.223', '9.5', 3)).to.equal(220.619);
        });
    });
    describe('除法运算', function() {
        it('220.6185 / 9.5 应该等于 23.223', function() {
            expect(lonts.calc.div(220.6185, 9.5)).to.equal(23.223);
        });
        it('0.42 / 6  应该等于 0.07', function() {
            expect(lonts.calc.div(0.42, 6)).to.equal(0.07);
        });
        it('42 / 0.7  应该等于 60', function() {
            expect(lonts.calc.div(42, 0.7)).to.equal(60);
        });
        it('字符串220.6185 / 9.5[保留2位小数] 应该等于 23.22', function() {
            expect(lonts.calc.div('220.6185', '9.5', 2)).to.equal(23.22);
        });
    });
});
