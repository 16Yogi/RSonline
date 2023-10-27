import { createSlice } from "@reduxjs/toolkit";
// console.log(data)
import data from "../services/data";
let cat=data.map((c)=>c.category)
let brand=data.map((b)=>b.brand)
const slice = createSlice({
    name : 'master',
    initialState:{
        value : {
            categories : [] , brands : [] , products :data, Totalprice : [""]
        }
    },
    reducers:{
        loadCategory : (state,action)=>{
            state.value = {...state.value,categories:action.payload}
        },
        loadBrand : (state,action)=>{
            state.value = {...state.value,brands:action.payload}
        },
        loadProduct : (state,action)=>{
            state.value = {...state.value,products:action.payload}
        }
    }
})

export const {loadCategory,loadBrand,loadProduct} = slice.actions;
export default slice.reducer;