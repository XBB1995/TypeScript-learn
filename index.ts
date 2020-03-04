// 1.类装饰器
function logClass(target: any) {
  // console.log(target)
  // target 就是调用的类
  // 增加方法 变量
  target.prototype.run = () => {
    console.log("run method")
  }
  // 重写当前类的各种方法 包括构造函数
  return class extends target {
    apiURL: string = "修改后的apiURL"
    getData() {
      console.log(this.apiURL)
    }
  }
}
@logClass
class HttpClient {
  apiURL: string
  constructor(apiURL: string) {
    this.apiURL = apiURL
  }
  getData() {
    console.log(this.apiURL)
  }
}

// var h = new HttpClient("XBB")
// // h.run()
// h.getData()

// 2.属性装饰器
function logProperty(params: any) {
  return function(target: any, attr: any) {
    // 参数1: 对于静态成员来说是累的构造函数 对于实例成员是类的原型对象target
    // 参数2: 成员的名字
    target[attr] = params
    // console.log(target)
  }
}
class HttpClient1 {
  // 属性装饰器 修饰紧接着的下一行属性
  @logProperty("doge")
  public url: string | undefined
  constructor() {}
  getData() {
    console.log(this.url)
  }
}

// var hc1 = new HttpClient1()
// hc1.getData()

// interface dec {
//   new (...arg: any[]): {}
// }

// function classDecorator<T extends dec>(constructor: T) {
//   return class extends constructor {
//     newProperty = "new property"
//     hello = "override"
//   }
// }

// @classDecorator
// class Greeter {
//   property = "property"
//   hello: string
//   constructor(m: string) {
//     this.hello = m
//   }
// }

// console.log(new Greeter("world"))

// 3.方法装饰器
function logMethod(params: any) {
  return function(target: any, methodName: any, desc: any) {
    // taeget 同属性装饰器 类的原型对象
    console.log("Log: logMethod -> target", target)
    // 被修饰方法的方法名
    console.log("Log: logMethod -> methodName", methodName)
    // 描述 desc.value 就是当前的被修饰方法
    console.log("Log: logMethod -> desc", desc)
    // 修改被修饰方法
    var oMethod = desc.value
    desc.value = function(...args: any[]) {
      // console.log("Log: desc.value -> args", args)
      args = args.map((value: any) => {
        return String(value)
      })
      // 保留原有函数内的方法
      // oMethod.apply(this, args)
      oMethod.call(this, ...args)
    }
  }
}
class HttpClient2 {
  public url: string | undefined
  constructor() {}
  // @logMethod("www.baidu.com")
  getData(...args: any[]) {
    // console.log("Log: HttpClient2 -> getData -> args", args)
    console.log("getData outside")
  }
}

// var hc1 = new HttpClient2()
// hc1.getData(123, "!23", true)
// console.log("Log: hc1", hc1)

// 4.方法参数装饰器
function logParams(params: any) {
  return function(target: any, methodName: any, paramsIndex: any) {
    // taeget 同属性装饰器 类的原型对象
    console.log("Log:  -> target", target)
    // 被修饰方法的方法名
    console.log("Log:  -> methodName", methodName)
    console.log("Log:  -> desc", paramsIndex)
  }
}
class HttpClient3 {
  public url: string | undefined
  constructor() {}
  // 在参数上装饰
  getData(@logParams("uuid") uuid: any) {
    console.log(uuid)
  }
}

var hc3 = new HttpClient3()
hc3.getData("XBB")

// 执行顺序
// 同类装饰器中  从右向左 从下至上
// 非同类 优先级：属性>方法>方法参数>类
