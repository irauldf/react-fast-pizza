// import type { OrderState } from "../order";

import type { CartState } from "./cart.types";

// export const initialState: OrderState = {
//   cart: [],
//   address: "",
//   customer: "",
//   estimatedDelivery: "",
//   id: "",
//   orderPrice: 0,
//   phone: "",
//   position: "",
//   priority: false,
//   priorityPrice: 0,
//   status: "",
// };

export const initialState: CartState = {
  cartItems: [],
};
