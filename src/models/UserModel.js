import Dao from "../util/dao.js";
export default class Users{
    tableName = "users";
    id = "";
    name = "";
    email = "";
    createdat = "";
    getUser() {
        const data = Dao.get_values("SELECT * FROM users");
        return data;
    }

    createUser() {
        
    }
}