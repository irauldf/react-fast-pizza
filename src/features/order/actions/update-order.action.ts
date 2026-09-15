import type { ActionFunctionArgs } from "react-router-dom";
import { updateOrder } from "@/services";
import type { UpdateOrderRequest } from "../order.types";

export async function updateOrderAction({ params }: ActionFunctionArgs) {
  if (!params.id) {
    throw new Error("Order ID is required");
  }

  const data: UpdateOrderRequest = { priority: true };
  await updateOrder(params.id, data);

  return null;
}
