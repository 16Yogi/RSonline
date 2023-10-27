import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'wish',
    initialState:{
        value : []
    },
    reducers:{
        addWishItem : (state,action)=>{
            var pid = action.payload;
            state.value = [...state.value,pid]
        },
        removeWishItem : (state,action)=>
        {
            var pid = action.payload
            state.value = state.value.filter(id=>id!=pid)
        },
        clearWishList : (state,action)=>
        {
            state.value = []
        },
    }
})

export const {addWishItem,removeWishItem,clearWishList} = slice.actions;
export default slice.reducer;
