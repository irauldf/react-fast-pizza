import { Link } from "react-router-dom";
import { useAppSelector } from "@/stores/hooks";
import { getTotalCartPrice, getTotalCartQuantity } from "../../cartSlice";
import { formatCurrency } from "@/utils";

export function CartOverview() {
  // const orderCart = useAppSelector((store) => store.cart);
  
  // const totalCartQuantity = getTotalCartQuantity(orderCart);
  // const totalCartAmount = getTotalCartPrice(orderCart);

  const totalCartQuantity = useAppSelector(getTotalCartQuantity);
  const totalCartAmount = useAppSelector(getTotalCartPrice);

  if (!totalCartQuantity) return;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartAmount)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
