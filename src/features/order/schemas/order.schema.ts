import { CartItemSchema } from "@/features/cart/schemas";
import { z } from "zod";

const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const OrderFormSchema = z.object({
  customer: z.string().min(1, "Customer is required"),
  phone: z.string().min(1, "Phone is required").regex(phoneRegex, "Invalid phone number"),
  address: z.string().min(1, "Address is required"),
  priority: z.boolean(),
  position: z.string().optional(),
  cart: z.array(CartItemSchema),
});

export type OrderForm = z.infer<typeof OrderFormSchema>;
