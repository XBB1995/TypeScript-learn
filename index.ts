// 泛型 解决类 接口 方法的复用性 以及对不特定数据类型的支持
// 支持不特定的数据类型 但要求传入类型和返回类型要一致
// eg. <T>泛型 必须大写字母 前后统一 但不一定为T
// 泛型函数
function getData<T>(value: T): T {
  return value
}
// 调用
getData<number>(123)
getData<string>("123")

// 参数为数组
function loggingIdentity<T>(arg: T[]): T[] {
  // 数组拥有长度属性
  console.log(arg.length)
  return arg
}

// var foo12 = function<T>(value: T): T {
//   return value
// }
// let myFoo1: <U>(arg: U) => U = foo12

// 泛型类 T
class MinClass<T> {
  public itemList: T[] = []
  add(item: T): void {
    this.itemList.push(item)
  }
  min(): T {
    var minItem = this.itemList[0]
    for (var i = 0; i < this.itemList.length; i++) {
      if (minItem > this.itemList[i]) {
        minItem = this.itemList[i]
      }
    }
    return minItem
  }
}
// 调用
var m1 = new MinClass<string>()
// 字典序
m1.add("b")
m1.add("bc")
m1.add("ab")
// console.log(m1.min())

// extra 把类作为类型约束参数 使用泛型优化
// 避免重复代码
class User {
  username: string | undefined
  password: string | undefined
}
class ArticleList {
  title: string | undefined
  desc?: string | undefined
  status: number | undefined
  constructor(params: { title: string; desc?: string; status: number }) {
    this.title = params.title
    this.desc = params.desc
    this.status = params.status
  }
}
class MysqlDb<T> {
  add(user: T): boolean {
    console.log("Log: MysqlDb -> add -> user", user)
    return true
  }
}
// 实例
var u = new User()
u.username = "XBB"
u.password = "123"
// var a = new ArticleList({
//   title: "news",
//   status: 200
// })

var db = new MysqlDb<User | ArticleList>()
db.add(u)
// db.add(a)

// 泛型接口
// 方法1
interface ConfigFn {
  <T>(value1: T): T
}
// 实现 泛型接口 在函数后标记泛型
var setData: ConfigFn = function<T>(value: T): T {
  return value
}
// 方法2
interface ConfigFn2<T> {
  (value: T): T
}
function getData2<T>(value: T): T {
  return value
}
// 调用 规定接口数据类型
var setData2: ConfigFn2<string> = getData2

// extra
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key]
// }

function create<T>(c: { new (): T }): T {
  return new c()
}
// 上面的函数 等效于 使用接口
interface inner<T> {
  new (): T
}
function create1<T>(c: inner<T>): T {
  return new c()
}

// class BeeKeeper {
//   hasMask: boolean
// }

// class ZooKeeper {
//   nametag: string
// }

// class Animal123 {
//   numLegs: number
// }

// class Bee extends Animal123 {
//   keeper: BeeKeeper
// }

// class Lion extends Animal123 {
//   keeper: ZooKeeper
// }

// function createInstance<A extends Animal123>(c: new () => A): A {
//   return new c()
// }

// createInstance(Lion).keeper.nametag // typechecks!
// createInstance(Bee).keeper.hasMask // typechecks!
