import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   wishlistItems: []
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const exist = state.wishlistItems.find(
                item => item.id === action.payload.id
            );

            if (!exist) {
                state.wishlistItems.push(action.payload);
            }
        },

        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(
                item => item.id !== action.payload,
            );
        },

        clearFromWishlist: (state) => {
            state.wishlistItems = [];
        }
    }
});

export const {
    addToWishlist,
    removeFromWishlist,
    clearFromWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;