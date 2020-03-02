// 接口： 行为和动作的规范 对批量方法进行约束
// 属性接口 对JSON的约束
interface FullName {
  firstName: string
  // 可选属性 ?:
  secondName?: string
}

function printName(name: FullName) {
  console.log(name.firstName + " " + name.secondName)
}
// 直接传入对象则需要 完全匹配接口
// printName({
//   age: 25,
//   firstName: "Chen",
//   secondName: "17"
// })
// 如果传入的是一个外部定义的对象 则只需要内部包含接口要求的属性即可
// 但是为了标准统一 推荐严格按照接口来传参
var obj = {
  age: 25,
  firstName: "Chen",
  secondName: "17"
}
printName(obj)

// ajax 实例
// interface Config {
//   // 自己定制要求
//   type: "GET" | "POST"
//   url: string
//   data?: string
//   dataType: string
// }

// function ajax(config: Config) {
//   var xhr = new XMLHttpRequest()
//   // true 表示异步 默认
//   xhr.open(config.type, config.url, true)
//   xhr.send(config.data)
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log("success")
//       if (config.dataType === "json") {
//         JSON.parse(xhr.responseText)
//         console.log("Log: ", JSON.parse(xhr.responseText))
//       } else {
//         console.log(xhr.responseText)
//       }
//     }
//   }
// }

// ajax({
//   type: "GET",
//   url: "",
//   dataType: "json"
// })

// 函数类型接口
interface Encrypt {
  // 定义函数参数及类型还有返回值类型
  (key: string, value: string): string
}

// 类型要一致 形参不需要和接口内一致
var md5: Encrypt = function(k: string, v: string) {
  return k + v
}

// 定义一个可索引对象
interface NumberDictionary {
  // 类似于中间增加的string转成number的规则
  // 返回值类型必须一致 此处统一为number
  [index: string]: number
  // 额外属性
  length: number
  name: number
}

var newD: NumberDictionary
newD = {
  "0": -1,
  "000": 0,
  "001": 1,
  // 0: 1234,
  // 1: 1,
  length: 20,
  name: 123
}

console.log(newD[0])
// 上面的number自动转化成字符串来索引
console.log(newD["length"])

// 类 类型接口 对类的约束和标准
interface Animal1 {
  subName: string
  eat(str: string): void
}
// 注意实现接口 关键字 implements
class Dog1 implements Animal1 {
  subName: string
  constructor(subName: string) {
    this.subName = subName
  }
  eat() {
    console.log(this.subName)
  }
}

// 接口继承
interface Animal2 {
  eat(): void
}
// 人类接口 继承 动物接口
interface Human extends Animal2 {
  work(): void
}
// 类实现接口
class Programmer {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  // 注意祖先接口中的方法也必须实现
  eat() {}
  work() {}
}
// 先继承类后实现接口
class Web extends Programmer implements Human {
  constructor(name: string) {
    super(name)
  }
  frontEnd(code: string) {
    console.log(this.name + code)
  }
}

var web = new Web("XBB")
web.frontEnd("在小米工作")
