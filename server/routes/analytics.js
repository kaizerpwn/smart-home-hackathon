import { getRooms, getDevices, getActiveDevices } from "../controllers/analytics.js";
import express from "express"

const router = express.Router();

router.get('/rooms', getRooms) 
router.get('/devices', getDevices) 
router.get('/activedevices', getActiveDevices) 

export default router;