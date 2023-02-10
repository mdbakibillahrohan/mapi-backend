/**
 * Author: Md Baki Billah (Rohan)
 * Title: DAO (Database Access Object)
 * Description: Database access model will help us to workign with databse
 */

// Dependency section 
import db from '../config/db.js';
// dao scaffolding 
const Dao = {};

Dao.get_values = async(sql) => {
    try {
        db.connect()
        const data = await db.query(sql);
        db.end();
        return data;
    } catch (error) {
        throw error;
    }
}

Dao.execute_values = async(sql) => {
    db.connect();
    await db.query(sql);
    db.end();
}

export default Dao;