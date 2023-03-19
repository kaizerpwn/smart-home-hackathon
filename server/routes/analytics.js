import { getRooms } from "../controllers/analytics.js";
import express from "express"

const router = express.Router();

router.post('/rooms', getRooms) 

export default router;