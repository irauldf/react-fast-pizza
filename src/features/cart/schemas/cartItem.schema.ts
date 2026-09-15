import { z } from "zod";

export const CartItemSchema = z.object({
  pizzaId: z.number(),
  name: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  totalPrice: z.number(),
});

export type CartItemForm = z.infer<typeof CartItemSchema>;