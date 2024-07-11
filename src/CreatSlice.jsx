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
                //check if plant already exist
                // const isAlreadyExist = state.items.contains(newProduct);
                // if (!isAlreadyExist) {
                //     state.items = [ ...state.items, newProduct]
                // }
            }
            else{
                state.items = [newProduct]
            }
        }
    },
    removeItem: (state, action) => {
    
    },
    updateQuantity: (state, action) => {
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;
