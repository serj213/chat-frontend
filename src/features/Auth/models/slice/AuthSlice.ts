import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAuthSchema, TAuthType } from "../types/authSchema";

// Define the initial state using that type
const initialState: IAuthSchema = {
  typeAuthForm: "register",
};

export const counterSlice = createSlice({
  name: "Auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeAuthForm: (state, action:PayloadAction<TAuthType>) => {
      state.typeAuthForm = action.payload;
    },
  },
});

export const { changeAuthForm } = counterSlice.actions;

export const { reducer: AuthReducer } = counterSlice;
