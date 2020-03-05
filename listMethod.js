// 数组方法
// 1.forEach

// 2.map 默认返回 undefined 返回一个新数据
// var newList = list.map(item => item * 2)
// console.log("Log: newList", newList)

// 3.reduce
// var sum = list.reduce((prev, curr) => {
//   prev += curr
//   return prev
// }, 0)
// console.log("Log: sum", sum)

// 4.filter 根据条件过滤数据 返回true则保留
// var products = [
//   { name: "cucumber", type: "vegetable" },
//   { name: "banana", type: "fruit" },
//   { name: "celery", type: "vegetable" },
//   { name: "orange", type: "fruit" }
// ]
// var filteredProducts = products.filter(product => {
//   return product.type === "vegetable"
// })
// console.log("Log: filteredProducts", filteredProducts)

// 5.find
// [].find
// 返回第一个符合条件的对象本身 找到之后 后续的不再执行

// 6.every 每个都满足
// 7.some 存在一个满足
// var computers = [
//   { name: "Apple", ram: 16 },
//   { name: "IBM", ram: 4 },
//   { name: "Acer", ram: 32 }
// ]
// var everyComputerCanRunProgram = true
// var someComputerCanRunProgram = false
// everyComputerCanRunProgram = computers.every(comp => {
//   return comp.ram > 16
// })
// someComputerCanRunProgram = computers.some(comp => {
//   return comp.ram > 16
// })
// console.log("Log: everyComputerCanRunProgram", everyComputerCanRunProgram)
// console.log("Log: someComputerCanRunProgram", someComputerCanRunProgram)
