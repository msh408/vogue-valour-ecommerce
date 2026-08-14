import {createSlice} from '@reduxjs/toolkit'
const initialState={
    quantity:0,
    totalPrice:0,
    cartItems:[]
}
 const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           const item =state.cartItems.find(item =>item.id === action.payload.id);
           if(item){
            item.quantity ++ ;
           }else{
            state.cartItems.push({
                ...action.payload,
                quantity:1
           })
           }
            state.quantity++;
            state.totalPrice += action.payload.price;
        },
   //حذف کل محصول//
       removeFromCart: (state, action) => {
        const item = state.cartItems.find(
            item => item.id === action.payload
        );

        if (item) {
            state.quantity-=item.quantity;
            state.totalPrice -= item.price * item.quantity;
            state.cartItems = state.cartItems.filter(
                item => item.id !== action.payload
            );
    }
},
        clearCart:(state,action)=>{
            state.cartItems=[];
            state.quantity = 0;
            state.totalPrice = 0;
        },
        increment: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );

            if (item) {
                item.quantity++;
                state.quantity++;
                state.totalPrice += item.price;
            }
        },
        decrement: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );

            if(!item) return;

            if (item.quantity > 1) {
                item.quantity--;
                state.quantity--;
                state.totalPrice -= item.price;
            }else {
                state.cartItems = state.cartItems.filter(
                    product => product.id !== action.payload
                );

                state.quantity--;
                state.totalPrice -= item.price;
            }
        }
    }
 })
 export  const {addToCart,removeFromCart,increment,decrement,clearCart} = cartSlice.actions;
 export default cartSlice.reducer