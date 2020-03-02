"use strict";
// 泛型 解决类 接口 方法的复用性 以及对不特定数据类型的支持
// 支持不特定的数据类型 但要求传入类型和返回类型要一致
// eg. <T>泛型 必须大写字母 前后统一 但不一定为T
// 泛型函数
function getData(value) {
    return value;
}
// 调用
getData(123);
getData("123");
// 参数为数组
function loggingIdentity(arg) {
    // 数组拥有长度属性
    console.log(arg.length);
    return arg;
}
// var foo12 = function<T>(value: T): T {
//   return value
// }
// let myFoo1: <U>(arg: U) => U = foo12
// 泛型类 T
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.itemList = [];
    }
    MinClass.prototype.add = function (item) {
        this.itemList.push(item);
    };
    MinClass.prototype.min = function () {
        var minItem = this.itemList[0];
        for (var i = 0; i < this.itemList.length; i++) {
            if (minItem > this.itemList[i]) {
                minItem = this.itemList[i];
            }
        }
        return minItem;
    };
    return MinClass;
}());
// 调用
var m1 = new MinClass();
// 字典序
m1.add("b");
m1.add("bc");
m1.add("ab");
// console.log(m1.min())
// extra 把类作为类型约束参数 使用泛型优化
// 避免重复代码
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var ArticleList = /** @class */ (function () {
    function ArticleList(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleList;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (user) {
        console.log("Log: MysqlDb -> add -> user", user);
        return true;
    };
    return MysqlDb;
}());
// 实例
var u = new User();
u.username = "XBB";
u.password = "123";
// var a = new ArticleList({
//   title: "news",
//   status: 200
// })
var db = new MysqlDb();
db.add(u);
// 实现 泛型接口 在函数后标记泛型
var setData = function (value) {
    return value;
};
function getData2(value) {
    return value;
}
// 调用 规定接口数据类型
var setData2 = getData2;
// extra
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key]
// }
function create(c) {
    return new c();
}
function create1(c) {
    return new c();
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
