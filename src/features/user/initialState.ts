import type { UserState } from "./types";

export const initialState: UserState = {
  username: "",
  status: "idle",
  position: null,
  address: "",
  error: "",
};
