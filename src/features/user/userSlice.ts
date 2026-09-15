import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import type { UserState } from "./types";
import { getAddress } from "@/services";
import type { Position } from "@/types";
import type { FetchAddressResult } from "@/services/geocoding/geocoding.types";
import { getPosition } from "@/services/geolocation/geolocation.service";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state: UserState, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.address = action.payload.address;
        state.position = action.payload.position;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = `There was a problem getting your address. Make sure you fill this field. ${action.error.message}`;
      }),
});

export const fetchAddress = createAsyncThunk<FetchAddressResult>("user/fetchAddress", async () => {
  const positionObj = await getPosition();

  const position: Position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  const addressObj = await getAddress(position);
  const address = `${addressObj?.road}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.country}`;

  return { position, address };
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
