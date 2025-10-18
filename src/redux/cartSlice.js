import { createSlice } from "@reduxjs/toolkit";


const initialState = {
cartItems:[],
isCartOpen:false,
}


export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action) => {

            const product = action.payload;
            const existing = state.cartItems.find(item =>item.id ===product.id);
            if(existing) {

                existing.quantity +=1;

            } 
            else {
                state.cartItems.push({...product,quantity:1});

            }
        },
        removeItem:(state,action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)


        },

        increaseItem:(state,action) => {
         const item = state.cartItems.find(i => i.id == action.payload)
         if(item) item.quantity++;



        },

        decreaseItem:(state,action) => {
            const item = state.cartItems.find(i => i.id == action.payload)

            if(item && item.quantity > 1){
                item.quantity --;
            }

        },
        setCartOpen:(state,action) => {
            state.isCartOpen = action.payload;
        }
    }
})


export const { addToCart, removeItem, increaseItem, decreaseItem, setCartOpen } = cartSlice.actions;

export default cartSlice.reducer;