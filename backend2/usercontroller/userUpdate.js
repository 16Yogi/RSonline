import mongoose from 'mongoose'
import ElectronItem from '../model/Electronicitem.js';
import AccessItem from '../model/Accessories.js';
import AddEmpDetailes from '../model/AddEmployee.js';

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
    
            console.warn(upempFname);
            console.warn(upempLname);
            console.warn(upempAge);
            console.warn(upempMail);
            console.warn(upempId);
            console.warn(upempJoinD);
            console.warn(upempPhone);
            console.warn(upempRole);
            console.warn(upempStatus);


            
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
}

export default userUpdate;