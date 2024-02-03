import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userSlice } from "./slices/user";

const persistConfig = { key: "SML", storage };
const persistedUserSlice = persistReducer(persistConfig, userSlice.reducer);

const rootReducer = combineReducers({ user: persistedUserSlice });

export default rootReducer;
