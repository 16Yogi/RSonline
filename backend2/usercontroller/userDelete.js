import mongoose from "mongoose";
import ElectronItem from "../model/Electronicitem.js";
import AccessItem from "../model/Accessories.js";
import AddEmpDetailes from "../model/AddEmployee.js";
import Invoice from "../model/Inovic.js"; 
import Expenses from "../model/Expenses.js";

class userDelete{
    // delete electronit item
    static delElectricItem = async (req,res) =>{
       try{
           const {id} = req.params.itemId;
           let data = await ElectronItem.findOneAndDelete(id) 
           res.send(data)
        }catch(error){
           
       }
    }

    //accesssiories item
    static delAccess = async (req,res) =>{
        try{
            const {id} = req.params.itemId;
            let data = await AccessItem.findOneAndDelete(id)
            res.send(data)
            console.warn("Accesss item successfully deleted")
        }catch(error){
            console.warn(error)
        }
    }
    
    // delete employee

    static delEmp = async (req,res)=>{
        try{
            const {id} = req.params.itemId;
            let data = await AddEmpDetailes.findOneAndDelete(id)
            res.send(data)
            console.warn("Emp Data deleted");
        }catch(error){
            console.warn("Deleted failed",error)
        }
    }

    //delete taxes
    
    // static delTax = async (req,res) =>{
    //     try{
    //         const {id} = req.params.itemId;
    //         let data = await  
    //     }
    // }

    //invoice
    static delInvoice = async (req,res) =>{
        try{
            const {id} = req.params.itemId;
            let data = await Invoice.findOneAndDelete(id)
            res.send(data)
            console.warn("Delete Invoice data");
        }catch(errror){  
            console.warn("Delete invoice data",error);
        }
    }

    // eexprenses
    static delExprenses = async (req,res) =>{
        try{
            const {id} = req.params.itemId;
            let data = await Expenses.findOneAndDelete(id)
            res.send(data)
            console.warn("delete Exprenses Data");
        }catch(error){
            console.warn("delete Exprenses data",error);
        }
    }

}

export default userDelete