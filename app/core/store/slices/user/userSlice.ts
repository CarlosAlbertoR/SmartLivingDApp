import { IUser } from "@core/models/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: IUser | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      console.log("payload", action.payload);

      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
