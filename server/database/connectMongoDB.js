import mongoose from "mongoose";

async function connectMongoDB(){
    await mongoose.connect('mongodb://localhost:27017/StudentData')
    .then(() => {
        console.log('MongoDB connection successful')
    })
    .catch((err) => {
        console.log(err)
    })
}
export default connectMongoDB