import { getMenu } from "@/services";

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}
