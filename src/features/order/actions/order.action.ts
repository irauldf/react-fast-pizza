import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { clearCart } from "@/features/cart/cartSlice";
import { OrderFormSchema } from "@/features/order/schemas";
import { createOrder } from "@/services";
import { store } from "@/stores/store";

export async function createOrderAction(args: ActionFunctionArgs) {
  const formData = await args.request.formData();
  const cart = formData.get("cart");

  if (typeof cart !== "string") {
    throw new Error("Invalid cart data");
  }

  const data = {
    customer: formData.get("customer"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    priority: formData.get("priority") === "on",
    position: formData.get("position"),
    cart: JSON.parse(cart),
  };

  const result = OrderFormSchema.safeParse(data);

  if (!result.success) {
    const fieldErrors = Object.fromEntries(
      result.error.issues
        .filter((issue) => issue.path.length > 0)
        .map((issue) => [issue.path[0], issue.message]),
    );

    return { errors: fieldErrors };
  }

  const order = result.data;
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
