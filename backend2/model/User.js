import mongoose from "mongoose";

const userContact = new mongoose.Schema({
    name:{type:String,require:true,trim:true},
    email:{type:String,require:true,trim:true},
    subject:{type:String,require:true,trim:true},
    message:{type:String,require:true,trim:true},  
})

const UserMessage = mongoose.model("contact",userContact)

export default UserMessage