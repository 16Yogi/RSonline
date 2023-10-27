import mongoose from "mongoose";
import ElectronItem from "../model/Electronicitem.js";

class userDelete{
    static delElectricItem = async (req,res) =>{
       try{
           const {id} = req.params.id;
           let data1 = await ElectronItem.find()
           res.send(data1)
           console.warn(data1)

        //    let data = await ElectronItem.findOneAndDelete(id) 
        //    res.send(data)
        }catch(error){
           
       }
    }
}

export default userDelete