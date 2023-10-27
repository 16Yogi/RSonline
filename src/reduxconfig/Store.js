import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';
import masterReducer from './MasterSlice';
import SingleProductReducer from "./SingleProductSlice";
import wishReducer from './WishSlice';
import { totalprice } from "./Totalprice";


const store = configureStore({
    reducer:{
        master : masterReducer,
        wishes : wishReducer,
        carts : cartReducer,
        SingleProduct:SingleProductReducer,
        Total:totalprice,
        
    }
})

export default store;