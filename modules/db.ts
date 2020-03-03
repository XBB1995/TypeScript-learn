// 模块
// 内部模块 ==> 命名空间
// 外部模块 ==> 模块

interface DBI<T> {
  add(info: T): boolean
  update(info: T, id: number): boolean
  delete(id: number): boolean
  get(id: number): T
  show(): boolean
}

// 定义操作MySQL数据库的类
class MysqlDB<T> implements DBI<T> {
  show(): boolean {
    console.log(this.list)
    return true
    // throw new Error("Method not implemented.")
  }
  list: T[]
  constructor() {
    // 调用类内属性 要用this关键字
    console.log("数据库创建成功")
    this.list = []
  }
  add(info: T): boolean {
    // console.log("Log: MysqlDB<T> -> add -> info", info)
    this.list.push(info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.")
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.")
  }
  get(id: number): T {
    var returnValue: T = this.list[0]
    this.list.forEach(item => {
      if (item.id === id) {
        returnValue = item
      }
    })
    return returnValue
    // throw new Error("Method not implemented.")
  }
}
// 操作 mssql 数据库的类
class MssqlDB<T> implements DBI<T> {
  show(): boolean {
    return true
  }
  add(info: T): boolean {
    console.log("Log: MssqlDB<T> -> add -> info", info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.")
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.")
  }
  get(id: number): T {
    throw new Error("Method not implemented.")
  }
}

export { MysqlDB, MssqlDB }
