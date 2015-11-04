let chai = require('chai')
let assert = chai.assert
describe('Array', function () {
  describe('#indexOf()', function () {
    it('test will pass', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5))
    })
    // it('test will fail', function () {
    //   let expected = [1, 1, 2, 3, 5]
    //   let fib = require('../src/some_code')
    //   expected.map(function (e, i) {
    //     assert.equal(fib(i), e)
    //   })
    // })
    it('test instantiating a class', function () {
      let MyClass = require('../src/some_class').MyClass
      let MySomething = require('../src/some_class').MySomething
      let myInstance = new MyClass()
      let mySomething = new MySomething()
      assert.equal(myInstance.getInfo(), 'hello world')
      let callback = myInstance.getCallback(mySomething)
      console.log(callback())
    })
  })
})
