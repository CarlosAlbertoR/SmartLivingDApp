import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@store/slices/user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "SML", storage };
const isClient = typeof window !== "undefined";

const persistedUserSlice = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: { user: persistedUserSlice },
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
