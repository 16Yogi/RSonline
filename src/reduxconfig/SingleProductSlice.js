import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'Singleproduct',
    initialState : {value:[]},
    reducers:{
        addSingleItem : (state,action)=>
        {
            var pid = action.payload 
            state.value = [pid]
        },
        // removeItem : (state,action)=>
        // {
        //     var pid = action.payload;
        //     state.value = state.value.filter(ob=>ob.pid!=pid)
        // },
        // incrementQty : (state,action)=>
        // {
        //     var pid = action.payload;
        //     state.value = state.value.map(ob=>ob.pid==pid?{...ob,qty:ob.qty+1}:ob)
        // },
        // decrementQty : (state,action)=>
        // {
        //     var pid = action.payload;
        //     state.value = state.value.map(ob=>ob.pid==pid && ob.qty>1?{...ob,qty:ob.qty-1}:ob)
        // }
    }
})

export const {addSingleItem} = slice.actions;

export default slice.reducer