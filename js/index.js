"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printName(name) {
    console.log(name.firstName + " " + name.secondName);
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
};
printName(obj);
// 类型要一致 形参不需要和接口内一致
var md5 = function (k, v) {
    return k + v;
};
var newD;
newD = {
    "0": -1,
    "000": 0,
    "001": 1,
    // 0: 1234,
    // 1: 1,
    length: 20,
    name: 123
};
console.log(newD[0]);
// 上面的number自动转化成字符串来索引
console.log(newD["length"]);
// 注意实现接口 关键字 implements
var Dog1 = /** @class */ (function () {
    function Dog1(subName) {
        this.subName = subName;
    }
    Dog1.prototype.eat = function () {
        console.log(this.subName);
    };
    return Dog1;
}());
// 类实现接口
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    // 注意祖先接口中的方法也必须实现
    Programmer.prototype.eat = function () { };
    Programmer.prototype.work = function () { };
    return Programmer;
}());
// 先继承类后实现接口
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.frontEnd = function (code) {
        console.log(this.name + code);
    };
    return Web;
}(Programmer));
var web = new Web("XBB");
web.frontEnd("在小米工作");
