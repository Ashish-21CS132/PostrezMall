import { createSlice } from '@reduxjs/toolkit';

const cartslice = createSlice({
  name: 'cartslice',
  initialState: {
    cart: [],
  },

  reducers: {
    addtocart: (state, action) => {
      const productdata = action.payload;
      const curritem = {
        title: productdata.title,
        key: productdata.id, // Assuming 'id' is the unique identifier
        price: productdata.price,
        image: productdata.image,
      };

      const index = state.cart.findIndex((item) => item.key === curritem.key);

      if (index === -1) {
        state.cart.push({ ...curritem, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },

    removefromcart: (state, action) => {
      const currkey = action.payload.id || action.payload.key; // Corrected this line

      const index = state.cart.findIndex((item) => item.key === currkey);
      if (index === -1) return;

      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.key !== currkey);
      } else {
        state.cart[index].quantity -= 1;
      }
    },

    resetcart: (state, action) => {
      const currkey = action.payload.id || action.payload.key; // Ensure this is correct
      state.cart = state.cart.filter((item) => item.key !== currkey);
    },
  },
});

export default cartslice.reducer;
export const { addtocart, removefromcart, resetcart } = cartslice.actions;
