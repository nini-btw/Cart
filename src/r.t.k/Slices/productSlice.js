import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk('productSlice/fetchProduct', async () => {
    const res= await fetch('http://localhost:9000/product');
    const data= await res.json();
    return data;
})


export const productSlice = createSlice({
    initialState :[],
    name: 'productSlice',
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            return state=action.payload
        })
        builder.addCase(fetchProduct.rejected,()=>{
            console.log('rejected');
        })
    }
})
export default productSlice.reducer;

