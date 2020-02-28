// TS 中定义函数的方法
// 函数声明
// function run(): string {
//   return "str"
// }
// // 匿名函数
// var run2 = function(): string {
//   return "str"
// }

function getInfo(name: string = "XBB", age?: number): string {
  if (age) {
    return `${name} --- ${age}`
  } else {
    return `${name} --- ${25}`
  }
}

// ?: 指的是可选参数 并且必须要放到参数的最后
// 可选参数没有默认值

// 剩余参数
// function sum(a: number, b: number, c: number, d: number): number {
//   return a + b + c + d
// }
// 可以替换成
function sum(a: number, ...result: number[]): number {
  return result.reduce((total, value) => {
    return total + value
  }, a)
}

// 函数重载 但与JAVA中的重载有所不同
// 前两个无函数体
function get(name: string): string

function get(name: string, age: number): string
// 汇总 内部判断参数类型
// str 允许的类型仅仅包括已经定义的 number 和 string
function get(name: any, age?: any): string {
  if (age) {
    return `${name} --- ${age}`
  } else {
    return `${name}`
  }
}

// console.log(get("XBB", 12))

var foo1 = (): number => {
  return 123
}
