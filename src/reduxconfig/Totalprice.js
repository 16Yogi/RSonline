import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name : 'totalprice',
    initialState : {totalprice:0},
    reducers:{
        totalprice : (state,action)=>
        {
            var pid = action.payload 
            state.totalprice += pid;
        },
       
    }
})

export const {totalprice} = slice.actions;

export default slice.reducer