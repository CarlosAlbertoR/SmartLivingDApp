import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "@web3auth/base";

const initialState = {} as UserInfo;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
