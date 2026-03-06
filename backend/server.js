import express from "express";
import ConnectDB from "./config/db.js";
import router from "./routes/authRoutes.js";
import 'dotenv/config'
import contentRouter from "./routes/crudeRouters.js";
import cors from "cors"
// middlle ware of express for json and cors 

const app = express();
app.use(express.json())
app.use(cors())
// running DB
ConnectDB()

//routes with middleware 
app.use("/auth",router)
app.use("/user",contentRouter)
const PORT = process.env.PORT

// app.get('/',(req,res)=>{
//     try {
        
//         res.send("hey its working")
//     } catch (error) {
//         console.log(error.message())
        
//     }
// })



// listing to the server  
app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})