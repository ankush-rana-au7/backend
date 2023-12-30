import dotenv from "dotenv"
import connectDB from "../src/db/index.js";
import {app} from './app.js';
 dotenv.config({
    path:"./env"
 })
 connectDB()
 .then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
 
 
app.use('/api/user', (req, res) => {
   return res.status(200).json({
      message:"hello!!!!!!!"
   })
 })
 /*const app = express ();
 ( async () => {
    try{
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 app.on("error", (error)=> {
console.log("ERROR:", error);
throw error
 })
 app.listen(process.env.PORT,() => {
    console.log(`App is listening on port ${process.env.PORT}`)
 })
    }
    catch(error){
console.error("ERROR:",error)
throw err
    }
 })();*/