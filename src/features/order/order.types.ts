import type z from "zod";
import type { CartItem } from "../cart/cart.types";
import type { OrderFormSchema } from "./schemas";

export interface OrderState {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status: OrderStatus;
  cart: CartItem[];
}

export interface OrderItemProps {
  item: CartItem;
  isLoadingIngredients?: boolean;
  ingredients?: string[];
}

export interface UpdateOrderRequest {
  priority: boolean;
}

export type CreateOrderRequest = z.infer<typeof OrderFormSchema>;

export type OrderStatus = "preparing" | "out for delivery" | "delivered";
