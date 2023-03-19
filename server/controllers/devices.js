import * as dotenv from 'dotenv'
import { db } from "../db/database.js"; 

dotenv.config();

export const getAllDevices = (req, res) => {

    const fetchAllDevices = `SELECT * FROM uredjaji`;
    db.query(fetchAllDevices, (err, data) => { 
        return res.status(200).json(data)
    })
} 

export const updateAllDevices = (req, res) => { 
    const device = req.body; 
 
    const updateDeviceInfo = `UPDATE uredjaji SET ime = ?, kategorija = ?, prostorija = ?, status = ? WHERE id = ?`;
    const values = [device.ime, device.kategorija, device.prostorija, device.status, device.id];

    db.query(updateDeviceInfo, values, (err, data) => { 
        console.log(data) 
    }) 
} 