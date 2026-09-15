export interface CartState {
  cartItems: CartItem[];
}

export interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
