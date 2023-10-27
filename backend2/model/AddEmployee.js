import mongoose from "mongoose";

const AddEmployee = new mongoose.Schema({
    addemFname:{type:String,require:true,trim:true},
    addemLname:{type:String,require:true,trim:true},
    addemAge:{type:String,require:true,trim:true},
    addemEmail:{type:String,require:true,trim:true},
    adddob:{type:String,require:true,trim:true},
    addemId:{type:String,require:true,trim:true},
    addemGender:{type:String,require:true,trim:true},
    addemJoinData:{type:String,require:true,trim:true},
    addemPhone:{type:String,require:true,trim:true},
    addemRole:{type:String,require:true,trim:true},
    addemStatus:{type:String,require:true,trim:true},
})

const AddEmpDetailes = mongoose.model("Employe",AddEmployee)
export default AddEmpDetailes