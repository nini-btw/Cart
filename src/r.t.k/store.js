import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Slices/productSlice'
import cartReducer from './Slices/cartSlice'

const store = configureStore({
  reducer:{
    product: productReducer,
    cart:cartReducer
  }
})

export default store;