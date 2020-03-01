class Person {
  // 公有属性
  public name: string
  // run = (): void => {}

  getName() {
    console.log(this.name)
  }

  constructor(name: string) {
    this.name = name
  }

  static printInfo() {
    console.log("static printInfo")
  }
}

class MyWorker extends Person {
  constructor(name: string) {
    // 调用父类的构造方法
    super(name)
  }
}

// TS 提供了三种类型 属性修饰符
// public 默认
// protected 类内 子类内 可访问 外部没法访问
// private 类内可访问 子类内 外部无法访问

// var p = new Person("XBB")
// Person.printInfo()
// p.getName()

// 类的多态
// 多个类继承
// class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   // 具体 由继承的类实现 不同的子类有不同的表现
//   eat() {
//     console.log("吃的方法")
//   }
// }

// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     return this.name + "骨头"
//   }
// }

// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     return this.name + "老鼠"
//   }
// }

// 抽象方法只放在抽象类当中
// 用来定义标准
abstract class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  // 抽象函数 不需要函数体 用于提供标准
  // 要求继承的非抽象类必须要实现该抽象方法
  abstract eat(): any
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  // 抽象类的子类必须要实现抽象类里面的抽象方法
  // 或继续抽象
  eat(): string {
    return "meat"
  }
}
