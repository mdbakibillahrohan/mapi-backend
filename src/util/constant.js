/**
 * Author: Md Bakibillah Rohan
 * Title: Constant File
 * Description: All the constant varibles are going to store here.
 */

// Scaffolding 
const Constant = {}

const urlPrefix = "/api/v1/";
// Adding the constant variables 
Constant.APP_PORT = 3000;

Constant.DB_TABLE = {
    USER: "users",
}

Constant.ENDPOINTS = {
    LOGIN: urlPrefix+"login",
    SIGNUP: urlPrefix+"signup"
}

// export the module 
export default Constant;

