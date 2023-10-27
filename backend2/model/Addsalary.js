import mongoose  from "mongoose";

const addsalary = new mongoose.Schema({
    stfname : {type:String,require:true,trim:true},
    netsalry : {type:String,require:true,trim:true},
    basic : {type:String,require:true,trim:true},
    tds : {type:String,require:true,trim:true},
    da : {type:String,require:true,trim:true},
    esi : {type:String,require:true,trim:true},
    hra : {type:String,require:true,trim:true},
    pf : {type:String,require:true,trim:true},
    conveyance : {type:String,require:true,trim:true},
    leave : {type:String,require:true,trim:true},
    allowance : {type:String,require:true,trim:true},
    proftax : {type:String,require:true,trim:true},
    medicalallowance : {type:String,require:true,trim:true},
    labourwelfare : {type:String,require:true,trim:true},
    other : {type:String,require:true,trim:true},
    fund : {type:String,require:true,trim:true},
})

const AddEmpSalary = mongoose.model("AddStaffSalary",addsalary)

export default AddEmpSalary