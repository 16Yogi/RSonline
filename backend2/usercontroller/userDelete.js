import mongoose from "mongoose";

class userDelete{
    static delElectricItem = (req,res) =>{
        try{
            let deldata = req.params;
            findOneAndDelete(({id:deldata}))  
            res.send(doc);   
        }catch(err){

        }   
    }
}