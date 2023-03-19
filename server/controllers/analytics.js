import * as dotenv from 'dotenv'
import { db } from "../db/database.js"; 

dotenv.config();

export const getRooms = (req, res) => {

    const query = `SELECT COUNT(*) as count FROM prostorije`;
    db.query(query, (err, data) => { 
        return res.status(200).json(data)
    })
}

export const getDevices = (req, res) => {

    const query = `SELECT COUNT(*) as count FROM uredjaji`;
    db.query(query, (err, data) => { 
        return res.status(200).json(data)
    })
}

export const getActiveDevices = (req, res) => {

    const query = `SELECT COUNT(*) as count FROM uredjaji WHERE status = '1'`;
    db.query(query, (err, data) => { 
        return res.status(200).json(data)
    })
}
 