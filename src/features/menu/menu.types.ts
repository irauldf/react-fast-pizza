export interface MenuState {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

export interface MenuItemProps {
  pizza: MenuState;
}
