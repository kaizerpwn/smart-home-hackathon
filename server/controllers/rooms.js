import * as dotenv from 'dotenv'
import { db } from "../db/database.js"; 

dotenv.config();

export const getAllRooms = (req, res) => {

    const fetchAllDevices = `SELECT * FROM prostorije`;
    db.query(fetchAllDevices, (err, data) => { 
        return res.status(200).json(data)
    })
    
}  