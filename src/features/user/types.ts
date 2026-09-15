import type { Position } from "@/types";

export interface UserState {
  username: string;
  status: UserStatus;
  position: Position | null;
  address: string;
  error?: string;
}

type UserStatus = "idle" | "loading" | "error";