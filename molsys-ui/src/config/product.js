import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    product: null,
    
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        
    },         
});

export const { setProduct } = productSlice.actions;
export const selectProduct = (state) => state.products.product;
export default productSlice.reducer;