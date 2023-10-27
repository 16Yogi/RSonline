import mongoose from "mongoose";

const InvoiceItem = new mongoose.Schema({
    cname:{type:String,require:true,trim:true},
    cdepart:{type:String,require:true,trim:true},
    cemail:{type:String,require:true,trim:true},
    ctax:{type:String,require:true,trim:true},
    cfulladd:{type:String,require:true,trim:true},
    cbilladd:{type:String,require:true,trim:true},
    cinvoicedate:{type:String,require:true,trim:true},
    cduedate:{type:String,require:true,trim:true},
    citem1:{type:String,require:true,trim:true},
    citemdes1:{type:String,require:true,trim:true},
    citemunit1:{type:String,require:true,trim:true},
    citemqty1:{type:String,require:true,trim:true},
    citem2:{type:String,require:true,trim:true},
    citemdes2:{type:String,require:true,trim:true},
    citemunit2:{type:String,require:true,trim:true},
    citemqty2:{type:String,require:true,trim:true},
    cdiscound:{type:String,require:true,trim:true},
    cotherinfo:{type:String,require:true,trim:true}, 
})

const Invoice = mongoose.model("invoice",InvoiceItem);
export default Invoice