import { createSlice } from '@reduxjs/toolkit';
import { isArrWithContent, isEmptyObj } from './assets/globalFuncs';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        let newProduct = action.payload;
        if (!isEmptyObj(newProduct)){
            if (isArrWithContent(state.items)){
                // check if plant already exist
                const isAlreadyExist = state.items.includes(newProduct);
                if (!isAlreadyExist) {
                    state.items = [ ...state.items, newProduct]
                }
            }
            else{
                state.items = [newProduct]
            }
        }
    },
    removeItem: (state, action) => {
        let product = action.payload;
        if (!isEmptyObj(product)){
            if (isArrWithContent(state.items)){
                // check if plant inside te cart
                const indexProduct = state.items.findIndex(el => el.name == product.name);
                let isProductInCart = (indexProduct >= 0);
                if (isProductInCart) {
                    state.items = state.items.splice(indexProduct)
                }
            }
        }
    },
    updateQuantity: (state, action) => {
        console.log('updateQuantity', action.payload);
        state.items = state.items;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;
