import express from 'express';
import UserMessage from '../model/User.js';
import ElectronItem from '../model/Electronicitem.js';
import AccessItem from '../model/Accessories.js';
import AddEmpDetailes from '../model/AddEmployee.js';
import Retailer from '../model/Retailer.js';
import Invoice from '../model/Inovic.js';
import Expenses from '../model/Expenses.js';

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
}


export default UserController