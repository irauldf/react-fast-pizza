import type { LoaderFunctionArgs } from "react-router-dom";
import { getOrder } from "@/services";

export async function orderLoader(args: LoaderFunctionArgs) {
  const id = args.params.id;

  if (!id) {
    throw new Response("Order ID is required", { status: 400 });
  }

  const order = await getOrder(id);
  return order;
}
