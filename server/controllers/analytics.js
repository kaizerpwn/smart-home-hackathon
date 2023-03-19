import * as dotenv from 'dotenv'
import { db } from "../db/database.js"; 

dotenv.config();

export const getRooms = (req, res) => {

    const checkUserExistsQuery = `SELECT COUNT(*) as count FROM prostorije`;
    db.query(checkUserExistsQuery, (err, data) => { 
        return res.status(200).json(data)
    })
}
 