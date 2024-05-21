import express from 'express'
import connectMongoDB from './database/connectMongoDB.js';
import userModel from './databaseStructure/databaseStructure.js';
import cors from 'cors'
const port = 5000;
const app = express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/getdetails/:rollNo',async (req,res) => {
        try {
            const student = await userModel.findOne({rollNo: req.params.rollNo});
            if(student){
                res.send(student)
            }
            else{
                return res.status(404).json({message:"Student not found"})
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({error:"Internal Server Error"})
        }
})

app.listen(port,() => {
    console.log("Server started...");
    connectMongoDB()
})