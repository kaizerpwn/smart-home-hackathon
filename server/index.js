// >> Libraries
import express from "express"
import cors from "cors" 


const app = express();


// >> Controllers
import userRoutes from "./routes/user.js" 


// >> Middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json())


// >> API Routes
app.use('/api/user', userRoutes); 
  

app.listen(8800, () => {
    console.log("[SERVER]: Server running on port 8800");
})