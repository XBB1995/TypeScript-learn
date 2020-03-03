import { MysqlDB } from "../modules/db"

class UserClass {
  username: string | undefined
  password: string | undefined
  id: number | undefined
}

var UserModel = new MysqlDB<UserClass>()
export { UserModel, UserClass }
