import express from 'express'
import ElectronItem from '../model/Electronicitem.js'
import AccessItem from '../model/Accessories.js'
import AddEmpDetailes from '../model/AddEmployee.js'
import Retailer from '../model/Retailer.js'
import Invoice from '../model/Inovic.js'

class userFetchdata {

    //Elctroni Item
    static electroniItem = async (req,res)=>{
        let data = await ElectronItem.find()
        res.send(data)
        console.warn(data)
    }

    //accessories
    static accessorieItem = async (req,res)=>{
        let data = await AccessItem.find()
        res.send(data)
        console.warn(data)
    }

    // Employee
    static allemployee = async (req,res)=>{
        let data = await AddEmpDetailes.find()
        res.send(data)
        console.warn(data)
    }

    //retailer
    static allretailer = async (req,res)=>{
        let data = await Retailer.find()
        res.send(data)
        console.log(data)
    }

    //invoice
    static allinvoice = async (req,res)=>{
        let data = await Invoice.find()
        res.send(data)
        console.log(data)
    }

}

export default userFetchdata