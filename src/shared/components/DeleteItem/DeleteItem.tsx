import { useAppDispatch } from "@/stores/hooks";
import { Button } from "../Button";
import { deleteItem } from "@/features/cart/cartSlice";

interface DeleteItemProps {
  pizzaId: number;
}

export function DeleteItem(props: DeleteItemProps) {
  const dispatch = useAppDispatch();

  return (
    <Button variant="small" onClick={() => dispatch(deleteItem(props.pizzaId))}>
      Delete
    </Button>
  );
}
