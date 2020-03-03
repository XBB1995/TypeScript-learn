"use strict";
// 模块
// 内部模块 ==> 命名空间
// 外部模块 ==> 模块
Object.defineProperty(exports, "__esModule", { value: true });
// 定义操作MySQL数据库的类
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
        // 调用类内属性 要用this关键字
        console.log("数据库创建成功");
        this.list = [];
    }
    MysqlDB.prototype.show = function () {
        console.log(this.list);
        return true;
        // throw new Error("Method not implemented.")
    };
    MysqlDB.prototype.add = function (info) {
        // console.log("Log: MysqlDB<T> -> add -> info", info)
        this.list.push(info);
        return true;
    };
    MysqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDB.prototype.get = function (id) {
        var returnValue = this.list[0];
        this.list.forEach(function (item) {
            if (item.id === id) {
                returnValue = item;
            }
        });
        return returnValue;
        // throw new Error("Method not implemented.")
    };
    return MysqlDB;
}());
exports.MysqlDB = MysqlDB;
// 操作 mssql 数据库的类
var MssqlDB = /** @class */ (function () {
    function MssqlDB() {
    }
    MssqlDB.prototype.show = function () {
        return true;
    };
    MssqlDB.prototype.add = function (info) {
        console.log("Log: MssqlDB<T> -> add -> info", info);
        return true;
    };
    MssqlDB.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDB.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MssqlDB;
}());
exports.MssqlDB = MssqlDB;
