import { formatCurrency } from "@/utils";
import type { MenuItemProps } from "../../menu.types";
import { Button } from "@/shared/components/Button";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { addItem, getQuantityById } from "@/features/cart/cartSlice";
import { DeleteItem } from "@/shared/components/DeleteItem";
import { UpdateCartQuantity } from "@/features/cart/components/UpdateCartQuantity";
import type { CartItem } from "@/features/cart/cart.types";

export function MenuItem({ pizza }: MenuItemProps) {
  const dipatch = useAppDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useAppSelector(getQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem: CartItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dipatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">Sold out</p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateCartQuantity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button variant="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
