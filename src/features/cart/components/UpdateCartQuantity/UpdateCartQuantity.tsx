import { Button } from "@/shared/components/Button";
import { useAppDispatch } from "@/stores/hooks";
import { decreaseItemQuantity, increaseItemQuantity } from "../../cartSlice";

interface UpdateCartQuantityProps {
  pizzaId: number;
  currentQuantity: number;
}

export function UpdateCartQuantity({ pizzaId, currentQuantity }: UpdateCartQuantityProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button variant="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button variant="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}
