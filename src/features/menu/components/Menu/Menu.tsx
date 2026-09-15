import type { MenuState } from "../../menu.types";
import { MenuItem } from "../MenuItem";

interface MenuProps {
  menu: MenuState[];
}

export function Menu({ menu }: MenuProps) {
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}
