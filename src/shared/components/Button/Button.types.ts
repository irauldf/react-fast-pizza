import type { ReactNode } from "react";

export interface ButtonProps {
  disabled?: boolean;
  to?: string;
  variant: ButtonType;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type ButtonType = "primary" | "secondary" | "small" | "round";
