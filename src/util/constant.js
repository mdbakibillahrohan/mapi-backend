/**
 * Author: Md Bakibillah Rohan
 * Title: Constant File
 * Description: All the constant varibles are going to store here.
 */

// Scaffolding 
const Constant = {}


// Adding the constant variables 
Constant.APP_PORT = 3000;
Constant.URL_PREFIX = "/api/v1"

Constant.DB_TABLE = {
    USER: "users",
}

Constant.ENDPOINTS = {
    LOGIN: "login",
    SIGNUP: "signup"
}

// export the module 
export default Constant;

