// 测试脚本 测试脚本与所要测试的源码脚本同名，但是后缀名为.test.js（表示测试）或者.spec.js（表示规格）
var add = require('./add.js')
var expect = require('chai').expect // chai断言库

describe('加法函数的测试',function () { //测试套件
  it('1 加 1 应该等于 2', function() { // 测试用例
    expect(add(1, 1)).to.be.equal(2); //断言
  });
  it('测试3加上-3',function () {
    expect(add(3,-3)).to.be.equal(0)
  })
})