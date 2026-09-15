import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import type { CartItem, CartState } from "./cart.types";
import type { RootState } from "@/stores/store";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: CartState, action: PayloadAction<CartItem>) {
      state.cartItems.push(action.payload);
    },
    deleteItem(state: CartState, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter((c) => c.pizzaId !== action.payload);
    },
    increaseItemQuantity(state: CartState, action: PayloadAction<number>) {
      const item = state.cartItems.find((c) => c.pizzaId === action.payload);
      if (!item) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state: CartState, action: PayloadAction<number>) {
      const item = state.cartItems.find((c) => c.pizzaId === action.payload);
      if (!item) return;
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state: CartState) {
      state.cartItems = [];
    },
  },
});

export const { addItem, deleteItem, decreaseItemQuantity, increaseItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
// export const getTotalCartQuantity = (state: CartState) =>
//   state.cart.reduce((acc, cur) => acc + cur.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0);

// export const getTotalCartPrice = (state: CartState) =>
//   state.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const getQuantityById = (id: number) => (state: RootState) =>
  state.cart.cartItems.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getCart = (state: RootState) => state.cart.cartItems;
