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

namespace A {}
namespace B {}
// A 和 B 中的命名可以相同而不冲突
// 命名空间中的方法默认私有 需要export才能向外暴露
// 调用 A.className()
// export import 命名空间当成一种模块
