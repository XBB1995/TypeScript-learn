"use strict";
// import { default as getDataFromDB, save } from "./modules/db"
// // 默认导出不能重命名 但可以整合到一个花括号中
Object.defineProperty(exports, "__esModule", { value: true });
// getDataFromDB()
// save()
// console.log("Log: getDataFromDB()", getDataFromDB())
var user_1 = require("./model/user");
var uu = new user_1.UserClass();
uu.username = "ASD";
uu.password = "123456";
uu.id = 10;
user_1.UserModel.add(uu);
user_1.UserModel.show();
// A 和 B 中的命名可以相同而不冲突
// 命名空间中的方法默认私有 需要export才能向外暴露
// 调用 A.className()
// export import 命名空间当成一种模块
