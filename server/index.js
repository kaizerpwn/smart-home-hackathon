// >> Libraries
import express from "express"
import cors from "cors" 


const app = express();


// >> Controllers
import userRoutes from "./routes/user.js" 
import analyticsRoutes from "./routes/analytics.js" 
import deviceRoutes from "./routes/devices.js" 
import roomRoutes from "./routes/rooms.js" 


// >> Middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json())


// >> API Routes
app.use('/api/analytics', analyticsRoutes); 
app.use('/api/devices', deviceRoutes); 
app.use('/api/rooms', roomRoutes); 
app.use('/api/user', userRoutes); 
  

app.listen(8800, () => {
    console.log("[SERVER]: Server running on port 8800");
})