import { MysqlDB } from "../modules/db"

class ArticleClass {
  username: string | undefined
  password: string | undefined
  id: number | undefined
}

var ArticleModel = new MysqlDB<ArticleClass>()
export { ArticleModel, ArticleClass }
