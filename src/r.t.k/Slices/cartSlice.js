import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice(
    {
        initialState:[],
        name:'cartSlice',
        reducers:{
            addToCart:(state,action)=>{
                const x = state.find((product)=>product.id===action.payload.id);
                if(x){
                    x.quantity +=1;
                }
                else{
                    const productClone ={...action.payload,quantity:1}
                    state.push(productClone);
                }
            },
            removeFromCart:(state,action)=>{
                return state.filter((e)=>e.id != action.payload.id)
            },
            clearCart:()=>{
                return [];
            }
        }
    }
)
export const {addToCart,removeFromCart,clearCart}=cartSlice.actions;
export default cartSlice.reducer;