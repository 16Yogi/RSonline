import express from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserMessage from '../model/User.js';
import ElectronItem from '../model/Electronicitem.js';
import AccessItem from '../model/Accessories.js';
import AddEmpDetailes from '../model/AddEmployee.js';
import Retailer from '../model/Retailer.js';
import Invoice from '../model/Inovic.js';
import Expenses from '../model/Expenses.js';
import AddEmpSalary from '../model/Addsalary.js';
import UserRegistration from '../model/Registration.js';

class UserController{

    //contact 
    static contact = async(req,res) =>{
        try{
            const {name,email,subject,message} = req.body 
            const userConMessage = new UserMessage({
                name:name,
                email:email,
                subject:subject,
                message:message,
            })
            await userConMessage.save()
            res.status(201).send({"status":"success","message":"contact update successfull"})
            console.log("Contact successfull")
        }catch(error){
            res.status(500).send({"status":"failed","message":"contact upload failed"})
            console.log("Contact failed")
        }
    }
    
    //add Electroni item
    static electronic = async(req,res) =>{
        try{
            const {name,brand,price,quantity} = req.body
            const elecItem = new ElectronItem({
                name:name,
                brand:brand,
                price:price,
                quantity:quantity,
            })
            
            await elecItem.save()
            res.status(201).send({"status":"success","message":"electronic Item Uploaded"})
            console.log("Electronic Item SUccessfully Uploaded")
        }catch(error){
            res.status(500).send({"statuc":"failed","message":"Not Uploaded"})
            console.log("Electronic Item Not Item")
        }
    }

    //add Accessories item
    static accessories = async(req,res) =>{
        try{
            const {aname,abrand,aprice,aquantity} = req.body
            const accessItem = new AccessItem({
                aname:aname,
                abrand:abrand,
                aprice:aprice,
                aquantity:aquantity,
            })
            
            await accessItem.save()
            res.status(201).send({"status":"success","message":"Accessories item uploaded"})
            console.log("Accessories item uploaded")
        }catch(error){
            res.status(201).send({"status":"failed","message":"Accessories item not uploaded"})
            console.log("Accessories item not uploaded")
        }
    }

    
    //Addretailer
    static addRetailer = async (req, res) => {
        try {
            const {
                ReFname,
                ReLname,
                ReAge,
                ReEmail,
                ReDob,
                ReGender,
                ReAddess,
                ReCountry,
                ReCity,
                ReState,
                RePincode,
                RePhone,
                ReImg,
                ReBiography,
                ReStatus
            } = req.body;
    
            const addRetail = new Retailer({
                ReFname: ReFname,
                ReLname: ReLname,
                ReAge: ReAge,
                ReEmail: ReEmail,
                ReDob: ReDob,
                ReGender: ReGender,
                ReAddess: ReAddess,
                ReCountry: ReCountry,
                ReCity: ReCity,
                ReState: ReState,
                RePincode: RePincode,
                RePhone: RePhone,
                ReImg: ReImg,
                ReBiography: ReBiography,
                ReStatus: ReStatus,
            });
    
            await addRetail.save();
            res.status(201).json({ status: "success", message: "Retailer Data Added Successfully" });
            console.log("Retailer Data Uploaded");
    
        } catch (error) {
            res.status(500).json({ status: "failed", message: "Retailer Data not uploaded", error: error.message });
            console.error("Retailer Data not uploaded:", error);
        }
    }
    

    //Add Employee
    static addemployee = async(req,res)=>{
        try{
            const {addemFname,addemLname,addemAge,addemEmail,adddob,addemId,addemGender,addemJoinData,addemPhone,addemRole,addemStatus} = req.body
            const empItem = new AddEmpDetailes({
                addemFname:addemFname,
                addemLname:addemLname,
                addemAge:addemAge,
                addemEmail:addemEmail,
                adddob:adddob,
                addemId:addemId,
                addemGender:addemGender,
                addemJoinData:addemJoinData,
                addemPhone:addemPhone,
                addemRole:addemRole,
                addemStatus:addemStatus,
            })

            await empItem.save()
            res.status(201).send({"status":"success","message":"Employee Data uploaded"})
            console.log("Employee Data uploaded")

        }catch(error){
            console.log(error)
            res.status(500).send({"status":"failed","message":"Employee Data not uploaded"})
            console.log("Employee Data not uploaded")
        }
    }
    
    //addInvoice
    static Invoice = async (req,res) =>{
        try{
            const {
                cname,
                cdepart,
                cemail,
                ctax,
                cfulladd,
                cbilladd,
                cinvoicedate,
                cduedate,
                citem1,
                citemdes1,
                citemunit1,
                citemqty1,
                citem2,
                citemdes2,
                citemunit2,
                citemqty2,
                cdiscound,
                cotherinfo
            } = req.body

            const invoiceItem = new Invoice({
                cname : cname,
                cdepart : cdepart,
                cemail : cemail,
                ctax : ctax,
                cfulladd : cfulladd,
                cbilladd : cbilladd,
                cinvoicedate : cinvoicedate,
                cduedate : cduedate,
                citem1 : citem1,
                citemdes1 : citemdes1,
                citemunit1 : citemunit1,
                citemqty1 : citemqty1,
                citem2 : citem2,
                citemdes2 : citemdes2,
                citemunit2 : citemunit2,
                citemqty2 : citemqty2,
                cdiscound : cdiscound,
                cotherinfo : cotherinfo,
            })
            await invoiceItem.save();
            res.status(201).send({"status":"success","message":"Invoice Data uploaded"})
            console.log("Invoice Data uploaded")

        }catch(error){
            res.status(500).send({"status":"failed","message":"Invoice Data not uploaded"})
            console.log("Invoice Data not uploaded",error)
        }
    }

    // expenses
    static expensesdata = async(req,res)=>{
        try{
            const {
            eitemname, 
            efrom, 
            epurdate, 
            epurby, 
            eamount,
            epaid,
            estatus,
            efile,
            }= req.body

            const expensesItem = new Expenses({
                eitemname:eitemname, 
                efrom:efrom, 
                epurdate:epurdate, 
                epurby:epurby, 
                eamount:eamount,
                epaid:epaid,
                estatus:estatus,
                efile:efile,
            })
            await expensesItem.save()
            res.status(201).send({"status":"success","message":"Expenses Data uploaded"})
            console.log("expenses Data uploaded")

        }catch(error){
            res.status(500).send({"status":"failed","message":"expenses Data not uploaded"})
            console.log("expenses Data not uploaded",error)
        }
    }

    // add salary
    static addsalary = async (req,res) =>{
        try{
           const {
            stfname,
            netsalry,
            basic,
            tds,
            da,
            esi,
            hra,
            pf,
            conveyance,
            leave,
            allowance,
            proftax,
            medicalallowance,
            labourwelfare,
            other,
            fund,
        } = req.body

        const addEmpSalr = new AddEmpSalary({
            stfname:stfname,
            netsalry:netsalry,
            basic:basic,
            tds:tds,
            da:da,
            esi:esi,
            hra:hra,
            pf:pf,
            conveyance:conveyance,
            leave:leave,
            allowance:allowance,
            proftax:proftax,
            medicalallowance:medicalallowance,
            labourwelfare:labourwelfare,
            other:other,
            fund:fund,
        })
        await addEmpSalr.save()
        res.status(201).send({"status":"success","message":"Add Salary Data uploaded"})
        console.log("Add Salary Data uploaded")

        }catch(error){
            res.status(500).send({"status":"failed","message":"Salary Data not uploaded"})
            console.log("Salary Data not uploaded",error)
        }
    }


    // user login 
// --------------------------------------------------------------

    static userRegistration = async (req,res)=>{
        const {fname,lname,email,password,passwordconfirmtion,country} = req.body
        const user = await UserRegistration.findOne({email:email})
        if(user){
            res.send({"status":"failed","message":"Email already exists"})
        }else{
            if(fname && lname && email && password && passwordconfirmtion && country){
                if(password === passwordconfirmtion){
                    try{
                        //incript password
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password,salt)
                        const doc = new UserRegistration({
                            fname:fname,
                            lname:lname,
                            email:email,
                            password:hashPassword,
                            country:country,
                            // tc:tc, 
                        }) 
                        await doc.save()
                        //after resiter save data
                        const save_user = await UserRegistration.findOne({email:email})
                        //generate JWT TOken
                        const token = jwt.sign({userID:save_user._id}, process.env.JWT_SECRET_KEY, {expiresIn:'1d'})

                        res.status(201).send({"status":"success","message":"registration successfull","token":token})
                        console.log("Registration successfull")
                    }catch(error){
                       console.warn(error)
                       res.send({"status":"failed","message":"unable to register"})
                       console.log("Unable to register")
                    }  
                }else{
                    res.send({"status":"failed", "message":"Password and confirm password doesn't match"})
                    console.log("Passworad and confirm password not match")
                }
            }else{
                res.send({"status":"failed","message":"All fields are required"})
                console.log("All fileds are require")
            }
        }
    }
    // //login
    // static userLogin = async (req,res) =>{
    //     try{
    //         const {email,password} = req.body
    //         if(email && password){
    //             const user = await UserRegistration.findOne({email:email})
    //             if(user != null){
    //                 const isMatch = await bcrypt.compare(password,user.password)
    //                 if(user.email === email && isMatch){
    //                     //generate token
    //                     const token = jwt.sign({userID:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})

    //                     res.send({"status":"success","message":"login successfull","token":token})

    //                 }else{
    //                     res.send({"status":"failed", "message":"email or password is not valid"})
    //                 }
    //             }else{
    //                 res.send({"status":"failed","message":"You are not a registed user"})
    //             }
    //         }else{
    //             res.send({"status":"failed","message":"All fields are required"})
    //         }
    //     }catch(error){
    //         console.warn(error)
    //         res.send({"status":"failed","message":"unable to login"})
    //     }
    // }

    // //chnage password
    // static changeUserPassword = async (req,res)=>{
    //     const {password,password_confirmtion} = req.body
    //     if(password && password_confirmtion){
    //         if(password !== password_confirmtion){
    //             res.send({"Status":"failed","message":"New Password and confirm new password doesn't match"})
    //         }else{
    //             const salt = await bcrypt.genSalt(10)
    //             const newHashPassword = await bcrypt.hash(password,salt)
    //             // console.warn(req.user)
    //             // console.warn(req.user._id)
    //             await UserRegistration.findByIdAndUpdate(req.user._id,{$set:{
    //                 password:newHashPassword
    //             }})

    //             //middleware
    //             res.send({"status":"success","message":"password changed successfully"})
    //         }
    //     }else{
    //         res.send({"status":"failed","message":"All fileds are required"})
    //     }
    // }

    // //login user
    // static loggedUser = async (req,res) =>{
    //     res.send({"user":req.user})
    // }

    // //forget password using mail
    // static sendUserPasswordResetEmail = async (req,res) =>{
    //     const {email} = req.body
    //     if(email){
    //         const user = await UserRegistration.findOne({email:email})
    //         console.warn(user) 
    //         if(user){
    //             const secret = user._id + process.env.JWT_SECRET_KEY
    //             const token = jwt.sign({userID:user._id},secret,{expiresIn:'15m'})
    //             //frontend link
    //             const link = `http://localhost:3000/api/user/reset/${user._id}/${token}`
    //             //-/api/user/reset/:id/:token
    //             console.log(link)   
    //             res.send({"status":"success","message":"Password reset Email send... Please check your email"})
    //         }else{
    //             res.send({"status":"failed","message":"Email doesn't exists"})
    //         }
    //     }else{
    //         res.send({"status":"failed","message":"email field is required"})
    //     }
    // }

    // //
    // static userPasswordReset = async (req,res) =>{
    //     const {password,password_confirmtion} = req.body
    //     const {id,token} = req.params 
    //     const user = await UserRegistration.findById(id)
    //     const new_secret = user._id + process.env.JWT_SECRET_KEY
    //     try{
    //         jwt.verify(token,new_secret)
    //         if(password &  password_confirmtion){
    //             if(password !== password_confirmtion){
    //                 res.send({"status":"failed","message":"ALl fields are required"})
    //             }else{
    //                 const salt = await bcrypt.genSalt(10)
    //                 const newHashPassword = await bcrypt.hash(password,salt)
    //                 await UserModel.findByIdAndUpdate(user._id, {$set:{password:newHashPassword}})
    //                 res.send({"status":"success","message":"Password Reset SUccessfullt"})
    //             }
    //         }else{
    //             res.send({"status":"failed","message":"ALl fields are required"})
    //         }

    //     }catch(error){
    //         console.warn(error)
    //         res.send({"status":"failed","message":"Invali"})
    //     }
    // }


}


export default UserController