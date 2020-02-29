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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    // run = (): void => {}
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    Person.printInfo = function () {
        console.log("static printInfo");
    };
    return Person;
}());
var MyWorker = /** @class */ (function (_super) {
    __extends(MyWorker, _super);
    function MyWorker(name) {
        // 调用父类的构造方法
        return _super.call(this, name) || this;
    }
    return MyWorker;
}(Person));
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    // 抽象类的子类必须要实现抽象类里面的抽象方法
    // 或继续抽象
    Dog.prototype.eat = function () {
        return "meat";
    };
    return Dog;
}(Animal));
