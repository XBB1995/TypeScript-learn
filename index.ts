// import { default as getDataFromDB, save } from "./modules/db"
// // 默认导出不能重命名 但可以整合到一个花括号中

// getDataFromDB()
// save()
// console.log("Log: getDataFromDB()", getDataFromDB())
import { UserModel, UserClass } from "./model/user"
// 类似操作文章模块的数据库
import { ArticleClass, ArticleModel } from "./model/article"

var uu = new UserClass()
uu.username = "ASD"
uu.password = "123456"
uu.id = 10
UserModel.add(uu)
UserModel.show()
