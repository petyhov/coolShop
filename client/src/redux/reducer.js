import { createReducer } from "@reduxjs/toolkit";

import { setPhones, setActivePhone, addPhone, incrementItem, decrementItem, setLoader, setEmptyCart } from "./actions";

const initialState = {
  phones: [],
  activePhone: {},
  cart: {},
  sum: 0,
  loader: false,
};

const totalPrice = (cart) => {
  const phonesArr = Object.values(cart);
  return phonesArr.reduce((acc, { price, items }) => acc + price * items, 0);
};

const reducer = createReducer(initialState, {
  [setLoader]: (state, { payload }) => ({ ...state, loader: payload }),
  [setPhones]: (state, { payload }) => ({ ...state, phones: payload }),
  [setActivePhone]: (state, { payload }) => ({ ...state, activePhone: { ...payload } }),
  [addPhone]: (state, { payload }) => {
    const idArr = Object.keys(state.cart);

    if (!idArr.includes(payload._id)) {
      const newPhone = { ...payload, items: 1 };
      const newCart = { ...state.cart, [payload._id]: newPhone };
      return { ...state, cart: newCart, sum: totalPrice(newCart) };
    }

    const addedPhone = state.cart[payload._id];
    const newCart = { ...state.cart, [payload._id]: { ...addedPhone, items: addedPhone.items + 1 } };
    return { ...state, cart: newCart, sum: totalPrice(newCart) };
  },

  [decrementItem]: (state, { payload }) => {
    const phone = state.cart[payload];
    if (phone.items === 1) {
      const newCart = { ...state.cart };
      delete newCart[payload];
      return { ...state, cart: newCart, sum: totalPrice(newCart) };
    }

    const newCart = { ...state.cart, [payload]: { ...phone, items: phone.items - 1 } };
    return { ...state, cart: newCart, sum: totalPrice(newCart) };
  },

  [incrementItem]: (state, { payload }) => {
    const phone = state.cart[payload];
    const newCart = { ...state.cart, [payload]: { ...phone, items: phone.items + 1 } };
    return { ...state, cart: newCart, sum: totalPrice(newCart) };
  },
  [setEmptyCart]: (state, action) => ({ ...state, cart: {}, sum: 0 }),
});

export default reducer;
