var expect = require('expect.js');

// ts 测试编译后文件
var lonts = require('../src/index.ts');

describe('格式化', function() {
    describe('时间格式化', function() {
        it('fmtDate(new Date(1583832979497), yyyy-MM-dd hh:mm:ss) 应该等于 2020-03-10 17:36:19', function() {
            expect(lonts.fmtDate(new Date(1583832979497), 'yyyy-MM-dd hh:mm:ss')).to.equal('2020-03-10 17:36:19');
        });
        it('fmtDate(new Date(1583832979497), hh:mm) 应该等于 17:36', function() {
            expect(lonts.fmtDate(new Date(1583832979497), 'hh:mm')).to.equal('17:36');
        });
        it('fmtDate(new Date(1583832979497)) 应该等于 2020-03-10 17:36:19', function() {
            expect(lonts.fmtDate(new Date(1583832979497))).to.equal('2020-03-10 17:36:19');
        });
    });
    describe('金额千分位', function() {
        it('fmtMoney(1234567) 应该等于 1,234,567', function() {
            expect(lonts.fmtMoney(1234567)).to.equal('1,234,567');
        });
    });
});
