import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    rollNo:{type:String},
    fullName:{type:String},
    gender:{type:String},
    branch:{type:String},
    course:{type:String}
})

const userModel = mongoose.model('studentDetails',userSchema)

export default userModel