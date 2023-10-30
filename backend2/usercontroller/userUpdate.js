import mongoose from 'mongoose'
import ElectronItem from '../model/Electronicitem.js';
import AccessItem from '../model/Accessories.js';
import AddEmpDetailes from '../model/AddEmployee.js';
import Invoice from '../model/Inovic.js';
import Expenses from '../model/Expenses.js';

class userUpdate{
    
    //Electronic Item
    static updateelecItem = async(req,res) =>{
        try{
         const data = req.body;
         const upeleitem = data.upeleitem;
         const upelebrand = data.upelebrand;
         const upeleprice = data.upeleprice;
         const upelequentity = data.upelequentity;
 
        //  console.warn(upeleitem);
        //  console.warn(upelebrand);
        //  console.warn(upeleprice);
        //  console.warn(upelequentity);
         
         let  update = await ElectronItem.updateMany(
            {name:upeleitem},{
                $set:{
                    name:upeleitem ,
                    brand:upelebrand,
                    price:upeleprice,
                    quantity:upelequentity,
                }
            });
            res.status(201).send({"status":"success","message":"Electronic data update successfull"})
            console.log("Elec Item successfull updated")
        }catch(error){
            res.status(500).send({"status":"failed","message":"Electronic data upload failed"})
            console.log("elec item failed updated")
        }
    }

    // Accessories
    static updateAcceItem = async (req,res) =>{
        try{
            const data = req.body;
            const upaitem = data.upaitem;
            const upabrand = data.upabrand;
            const upaprice = data.upaprice;
            const upaquentity = data.upaquentity;
    
            console.warn(upaitem);
            console.warn(upabrand);
            console.warn(upaprice);
            console.warn(upaquentity);
            
            let  update = await AccessItem.updateMany(
               {aname:upaitem},{
                   $set:{
                       aname:upaitem,
                       abrand:upabrand,
                       aprice:upaprice,
                       aquantity:upaquentity,
                   }
               });
               res.status(201).send({"status":"success","message":"Access data update successfull"})
               console.log("Access Item successfull updated")
           }catch(error){
               res.status(500).send({"status":"failed","message":"Access data upload failed"})
               console.log("Access item failed updated")
           }
    }

    // employees
    static updateEmployeData = async (req,res) =>{
        try{
            const data = req.body;
            const upempFname = data.upempFname;
            const upempLname = data.upempLname;
            const upempAge = data.upempAge;
            const upempMail = data.upempMail;
            const upempId = data.upempId;
            const upempJoinD = data.upempJoinD;
            const upempPhone = data.upempPhone;
            const upempRole = data.upempRole;
            const upempStatus = data.upempStatus;
    
            // console.warn(upempFname);
            // console.warn(upempLname);
            // console.warn(upempAge);
            // console.warn(upempMail);
            // console.warn(upempId);
            // console.warn(upempJoinD);
            // console.warn(upempPhone);
            // console.warn(upempRole);
            // console.warn(upempStatus);


            
            let  update = await AddEmpDetailes.updateMany(
               {addemEmail:upempMail},{
                   $set:{
                        
                        addemFname : upempFname,
                        addemLname: upempLname,
                        addemAge : upempAge,
                        addemEmail : upempMail,
                        addemId : upempId,
                        addemJoinData : upempJoinD,
                        addemPhone : upempPhone,
                        addemRole : upempRole,
                        addemStatus : upempStatus,
                   }
               });
               res.status(201).send({"status":"success","message":"Employee data update successfull"})
               console.log("Employee Item successfull updated")
        }catch(error){ 
               res.status(500).send({"status":"failed","message":"Employee data upload failed"})
               console.log("Employee item failed updated")
            }
    }

    //inovoice

    static invoiceupdate = async (req,res) =>{
        try{
            const data = req.body;
            const upinvdepart = data.upinvdepart;
            const upinvmail = data.upinvmail;
            // const upinvtax = data.upinvtax;
            const upinvadd = data.upinvadd;
            const upinvbilladd = data.upinvbilladd;
            const upinvdate = data.upinvdate;
            // const upinvduedate = data.upinvduedate;
            const upinvitem1 = data.upinvitem1;
            const upinvdesc1 = data.upinvdesc1;
            const upinvcost1 = data.upinvcost1;
            const upinvqty1 = data.upinvqty1;
            // const upinvamount1 = data.upinvamount1;
            const upinvitem2 = data.upinvitem2;
            const upinvdesc2 = data.upinvdesc2;
            const upinvcost2 = data.upinvcost2;
            const upinvqty2 = data.upinvqty2;
            // const upinvamount2 = data.upinvamount2;
            // const upinvitem3 = data.upinvitem3;
            // const upinvdesc3 = data.upinvdesc3;
            // const upinvcost3 = data.upinvcost3;
            // const upinvqty3 = data.upinvqty3;
            // const upinvamount3 = data.upinvamount3;
            // const upinvtotal = data.upinvtotal;
            const upinvtaxx = data.upinvtaxx;
            // const upinvgrandtotal = data.upinvgrandtotal
            const upinvotherinfo = data.upinvotherinfo;
            
            let  invupdate = await Invoice.updateMany(
                {addemEmail:upinvmail},{
                    $set:{ 
                        cdepart:upinvdepart,
                        cemail:upinvmail,
                        ctax:upinvtaxx,
                        cfulladd:upinvadd,
                        cbilladd:upinvbilladd,
                        cinvoicedate:upinvdate,
                        citem1:upinvitem1,
                        citemdes1:upinvdesc1,
                        citemunit1:upinvcost1,
                        citemqty1:upinvqty1,
                        citem2:upinvitem2,
                        citemdes2:upinvdesc2,
                        citemunit2:upinvcost2,
                        citemqty2:upinvqty2,
                        cotherinfo:upinvotherinfo,
                    }
                });
                res.status(201).send({"status":"success","message":"Invoic data update successfull"})
                console.log("Invoice Item successfull updated")
    
        }catch(error){
            res.status(500).send({"status":"failed","message":"Invoice data upload failed"})
            console.log("Invoice item failed updated")
        }
    }


    // Expenses

    static expensesupdate = async (res,req) =>{
        try{
            // const data = req.body;
            const {
                expitemname,
                exppurcheshfrom,
                exppurchesdate,
                exppurchesby,
                exppurchesamount,
                exppurchespaidby,
                exppurchesstatus,
                exppurchesattachment
            } = req.body
            
            let  expupdate = await Expenses.updateMany(
                {eitemname:expitemname},{
                    $set:{ 
                        expitemname:expitemname,
                        exppurcheshfrom:exppurcheshfrom,
                        exppurchesdate:exppurchesdate,
                        exppurchesby:exppurchesby,
                        exppurchesamount:exppurchesamount,
                        exppurchespaidby:exppurchespaidby,
                        exppurchesstatus:exppurchesstatus,
                        exppurchesattachment:exppurchesattachment
                    }
                });
                res.status(201).send({"status":"success","message":"Edit Expenses data update successfull"})
                console.log("Edit Expenses Item successfull updated")
        }catch(error){
            res.status(500).send({"status":"success","failed":"Edit Expenses data failed successfull"})
            console.log("Edit Expenses Item failed updated")
        }
    }
}

export default userUpdate;