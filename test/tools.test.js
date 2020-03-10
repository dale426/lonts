var expect = require('expect.js');

// ts 测试编译后文件
var lonts = require('../src/index.ts');

describe('工具库', function() {
    describe('身份证、手机号脱敏处理', function() {
        it('encrypt(18805719898) 应该等于 188****9898', function() {
            expect(lonts.encrypt(18805719898)).to.equal('188****9898');
        });
        it('encrypt(61000020010909111X, 6, 4) 应该等于 610000********111X', function() {
            expect(lonts.encrypt('61000020010909111X', 6, 4)).to.equal('610000********111X');
        });
    });
});