import mongoose from "mongoose";

const ElectronicItem = new mongoose.Schema({
    name:{type:String,require:true,trim:true},
    brand:{type:String,require:true,trim:true},
    price:{type:String,require:true,trim:true},
    quantity:{type:String,require:true,trim:true},
})

const ElectronItem = mongoose.model("electricitem",ElectronicItem)

export default ElectronItem