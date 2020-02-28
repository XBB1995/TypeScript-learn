"use strict";
var username = "XBB";
var flag = false;
var num = 123;
// 定义数组的三种方式
var arr = [232, 1];
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, 4, 5];
// 定义元组类型 数组内可以包含多种类型 按位置指定 即索引必须要匹配
// 错误写法
// var arrs: [number, string] = ["aaaa", 1, "1"]
// 正确写法
var arrs = [1, "1"];
// 枚举类型
// 格式： enum 大写单词 { key = code}
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 2] = "error";
    Flag[Flag["waiting"] = 3] = "waiting";
})(Flag || (Flag = {}));
var s = Flag.success;
// 如果枚举的标识符没有赋值 则返回默认提供的code 延续上一个key
// 注意！并不是数组下标
var w = Flag.waiting;
console.log("Log: w", w); // 3
// 任意类型的用处
// 替代 Object 类型
var foo;
// 表示方法没有任何返回类型  用于标识返回值类型
// function run(): void {}
function runTest() {
    return null;
}
// never 类型 包括 null 和 undefined 类型
// 表示不存在的类型 如立即执行函数 IIFE
var a;
a = (function () {
    throw new Error("error!");
})();
