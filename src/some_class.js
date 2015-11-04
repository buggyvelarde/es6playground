
export class MyClass {

  constructor () {
    console.log(this)
  }

  getInfo () {
    return 'hello world'
  }

  getCallback (context) {
    var a = 'fred'
    console.log(context)
    return function () {
      return 'callback' + this.getSomething()
    }.bind(context)
  }

}

export class MySomething {
  getSomething () {
    return ' how are you '
  }
}

// export default class x {
//   constructor () {
//     console.log('x')
//   }
// }
