import mongoose from "mongoose";

const ExpensesItem = new mongoose.Schema({
    eitemname : {type:String,require:true,trim:true},
    efrom : {type:String,require:true,trim:true},
    epurdate : {type:String,require:true,trim:true},
    epurby :{type:String,require:true,trim:true},
    eamount:{type:String,require:true,trim:true},
    epaid:{type:String,require:true,trim:true},
    estatus:{type:String,require:true,trim:true},
    efile:{type:String,require:true,trim:true}
})

const Expenses = mongoose.model("exprenses",ExpensesItem)
export default Expenses