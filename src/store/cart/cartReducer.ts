import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  img: string;
}

export interface CartState {
  products: CartProduct[] | [];
}

const initialState: CartState = {
  products: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const product = state.products.find((item) => item.id === action.payload.id); // find the product if it's in the cart

      if (product != null) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToCart, removeProduct, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
