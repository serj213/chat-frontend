import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../types/user";


// Define the initial state using that type
const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "Auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeUser: (state, action:PayloadAction<IUser>) => {
        state.user = action.payload;
      },
  },
});

export const { changeUser } = userSlice.actions;

export const { reducer: UserReducer } = userSlice;
