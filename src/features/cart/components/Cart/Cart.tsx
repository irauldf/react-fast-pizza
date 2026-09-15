import { LinkButton } from "@/shared/components/LinkButton";
import { Button } from "@/shared/components/Button";
import { CartItem } from "../CartItem";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { clearCart, getCart } from "../../cartSlice";
import { EmptyCart } from "../EmptyCart";

export function Cart() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);
  const cart = useAppSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {user.username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b border-b-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <Button variant="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button variant="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}
