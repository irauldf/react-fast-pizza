import { formatCurrency } from "@/utils";
import { DeleteItem } from "@/shared/components/DeleteItem";
import { UpdateCartQuantity } from "../UpdateCartQuantity";
import type { CartItem } from "../../cart.types";
import { useAppSelector } from "@/stores/hooks";
import { getQuantityById } from "../../cartSlice";

export interface CartItemProps {
  item: CartItem;
}

export function CartItem({ item }: CartItemProps) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useAppSelector(getQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateCartQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
