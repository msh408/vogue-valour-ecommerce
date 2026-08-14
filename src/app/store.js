import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice';
import wishlistReducer from "../features/wishlist/wishlistSlice";
import filterReducer from '../features/filters/filtersSlice'
const store = configureStore({
    reducer:{
        cart : cartReducer ,
        wishlist :wishlistReducer,
        filter :filterReducer
    }
})
export default store;