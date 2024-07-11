import { createSlice } from '@reduxjs/toolkit';
import { isArrWithContent, isEmptyObj } from './assets/globalFuncs';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        let product = action.payload;
        if (!isEmptyObj(product)){
            if (isArrWithContent(state.items)){
                // check if plant already exist
                const indexProduct = state.items.findIndex(el => el.name == product.name);
                let isAlreadyExist = (indexProduct >= 0);
                if (!isAlreadyExist) {
                    product.quantity = 1;
                    state.items = [ ...state.items, product]
                }
                else {
                    state.items[indexProduct].quantity += 1;
                }
            }
            else{
                product.quantity = 1;
                state.items = [product]
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
                    state.items = state.items.splice(indexProduct, 1)
                }
            }
        }
    },
    updateQuantity: (state, action) => {
        let data = action.payload;
        if (!isEmptyObj(data)){
            let product = data.item;
            if (!isEmptyObj(product)){
                if (data.newQuantity >= 0){
                    const indexProduct = state.items.findIndex(el => el.name == product.name);
                    let isProductInCart = (indexProduct >= 0);
                    if (isProductInCart) {
                        state.items[indexProduct].quantity = data.newQuantity;
                    }
                }
            }
        }
        state.items = state.items;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;
