import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'cart',
    initialState : {value:[],
    },
    reducers:{
        addItem : (state,action)=>
        {
            var pid = action.payload 
            state.value = [...state.value,{pid,qty:1}]
        },
        removeItem : (state,action)=>
        {
            var pid = action.payload;
            state.value = state.value.filter(ob=>ob.pid!=pid)
        },
        incrementQty : (state,action)=>
        {
            var pid = action.payload;
            state.value = state.value.map(ob=>ob.pid==pid?{...ob,qty:ob.qty+1}:ob)
        },
        decrementQty : (state,action)=>
        {
            var pid = action.payload;
            state.value = state.value.map(ob=>ob.pid==pid && ob.qty>1?{...ob,qty:ob.qty-1}:ob)
        },
        clearCart : (state,action)=>
        {
            state.value = []
        },
        
       
    }
})

export const {addItem,removeItem,incrementQty,decrementQty,clearCart} = slice.actions;

export default slice.reducer