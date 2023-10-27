import mongoose from 'mongoose'

const RetailerData = new mongoose.Schema({
                
    ReFname:{type:String,require:true,trim:true},
    ReLname:{type:String,require:true,trim:true},
    ReAge:{type:String,require:true,trim:true},
    ReEmail:{type:String,require:true,trim:true},
    ReDob:{type:String,require:true,trim:true},
    ReGender:{type:String,require:true,trim:true},
    ReAddess:{type:String,require:true,trim:true},
    ReCountry:{type:String,require:true,trim:true},
    ReCity:{type:String,require:true,trim:true},
    ReState:{type:String,require:true,trim:true},
    RePincode:{type:String,require:true,trim:true},
    RePhone:{type:String,require:true,trim:true},
    ReImg:{type:String,require:true,trim:true},
    ReBiography:{type:String,require:true,trim:true},
    ReStatus:{type:String,require:true,trim:true},
});

const Retailer = mongoose.model("retailerdata",RetailerData);
export default Retailer