import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./slices/user/userSlice";

const persistConfig = { key: "SML", storage };
const isClient = typeof window !== "undefined";

const persistedUserSlice = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: { user: persistedUserSlice },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
