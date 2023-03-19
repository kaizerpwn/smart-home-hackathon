import { getAllRooms } from "../controllers/rooms.js";
import express from "express"

const router = express.Router();

router.get('/', getAllRooms)   

export default router;