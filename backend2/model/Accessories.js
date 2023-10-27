import mongoose from 'mongoose'

const AccessoriesItem = new mongoose.Schema({
    aname:{type:String,require:true,trim:true},
    abrand:{type:String,require:true,trim:true},
    aprice:{type:String,require:true,trim:true},
    aquantity:{type:String,require:true,trim:true},
});

const AccessItem = mongoose.model("accessoriesitem",AccessoriesItem);

export default AccessItem;