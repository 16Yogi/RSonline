import mongoose from 'mongoose'

const UserRegister = new mongoose.Schema({
    fname : {type:String,require:true,trim:true},
    lname : {type:String,require:true,trim:true},
    email : {type:String,require:true,trim:true},
    password : {type:String,require:true,trim:true},
    passwordconfirmtion : {type:String,require:true,trim:true},
    country : {type:String,require:true,trim:true},
    tc:{type:Boolean, require:true,trim:true}

});

const UserRegistration = mongoose.model("userregistration",UserRegister);

export default UserRegistration;