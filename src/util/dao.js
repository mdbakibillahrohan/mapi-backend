/**
 * Author: Md Baki Billah (Rohan)
 * Title: DAO (Database Access Object)
 * Description: Database access model will help us to workign with databse
 */

// Dependency section 
import db from '../config/db.js';
// dao scaffolding 
const Dao = {};

Dao.get_values = (sql, table_name) => {
    db.connect()
    db.end();
}