import { useLoaderData } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";
import type { MenuState } from "../menu.types";

export function MenuPage() {
  const menu = useLoaderData<MenuState[]>();
  return <Menu menu={menu} />;
}
