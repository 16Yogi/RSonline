import mongoose from "mongoose";
import ElectronItem from "../model/Electronicitem.js";

class userDelete{
    static delElectricItem = async (req,res) =>{
       try{
           const {id} = req.params.itemId;
           let data = await ElectronItem.findOneAndDelete(id) 
           res.send(data)
        }catch(error){
           
       }
    }
}

export default userDelete