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
