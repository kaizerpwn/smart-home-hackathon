import { getAllDevices, updateAllDevices } from "../controllers/devices.js";
import express from "express"

const router = express.Router();

router.get('/', getAllDevices)  
router.post('/save', updateAllDevices)  

export default router;