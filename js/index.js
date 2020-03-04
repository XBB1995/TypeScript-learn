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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 1.类装饰器
function logClass(target) {
    // console.log(target)
    // target 就是调用的类
    // 增加方法 变量
    target.prototype.run = function () {
        console.log("run method");
    };
    // 重写当前类的各种方法 包括构造函数
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiURL = "修改后的apiURL";
            return _this;
        }
        class_1.prototype.getData = function () {
            console.log(this.apiURL);
        };
        return class_1;
    }(target));
}
var HttpClient = /** @class */ (function () {
    function HttpClient(apiURL) {
        this.apiURL = apiURL;
    }
    HttpClient.prototype.getData = function () {
        console.log(this.apiURL);
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
// var h = new HttpClient("XBB")
// // h.run()
// h.getData()
// 2.属性装饰器
function logProperty(params) {
    return function (target, attr) {
        // 参数1: 对于静态成员来说是累的构造函数 对于实例成员是类的原型对象target
        // 参数2: 成员的名字
        target[attr] = params;
        // console.log(target)
    };
}
var HttpClient1 = /** @class */ (function () {
    function HttpClient1() {
    }
    HttpClient1.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logProperty("doge")
    ], HttpClient1.prototype, "url", void 0);
    return HttpClient1;
}());
// var hc1 = new HttpClient1()
// hc1.getData()
// interface dec {
//   new (...arg: any[]): {}
// }
// function classDecorator<T extends dec>(constructor: T) {
//   return class extends constructor {
//     newProperty = "new property"
//     hello = "override"
//   }
// }
// @classDecorator
// class Greeter {
//   property = "property"
//   hello: string
//   constructor(m: string) {
//     this.hello = m
//   }
// }
// console.log(new Greeter("world"))
// 3.方法装饰器
function logMethod(params) {
    return function (target, methodName, desc) {
        // taeget 同属性装饰器 类的原型对象
        console.log("Log: logMethod -> target", target);
        // 被修饰方法的方法名
        console.log("Log: logMethod -> methodName", methodName);
        // 描述 desc.value 就是当前的被修饰方法
        console.log("Log: logMethod -> desc", desc);
        // 修改被修饰方法
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // console.log("Log: desc.value -> args", args)
            args = args.map(function (value) {
                return String(value);
            });
            // 保留原有函数内的方法
            // oMethod.apply(this, args)
            oMethod.call.apply(oMethod, __spreadArrays([this], args));
        };
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    // @logMethod("www.baidu.com")
    HttpClient2.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // console.log("Log: HttpClient2 -> getData -> args", args)
        console.log("getData outside");
    };
    return HttpClient2;
}());
// var hc1 = new HttpClient2()
// hc1.getData(123, "!23", true)
// console.log("Log: hc1", hc1)
// 4.方法参数装饰器
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        // taeget 同属性装饰器 类的原型对象
        console.log("Log:  -> target", target);
        // 被修饰方法的方法名
        console.log("Log:  -> methodName", methodName);
        console.log("Log:  -> desc", paramsIndex);
    };
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
    }
    // 在参数上装饰
    HttpClient3.prototype.getData = function (uuid) {
        console.log(uuid);
    };
    __decorate([
        __param(0, logParams("uuid"))
    ], HttpClient3.prototype, "getData", null);
    return HttpClient3;
}());
var hc3 = new HttpClient3();
hc3.getData("XBB");
// 执行顺序
// 同类装饰器中  从右向左 从下至上
// 非同类 优先级：属性>方法>方法参数>类
