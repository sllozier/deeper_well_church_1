import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./reducers/userSlice";
import authReducer from "./reducers/authSlice";
import writerReducer from "./reducers/writerSlice";
import adminReducer from "./reducers/adminSlice";
import productReducer from "./reducers/productSlice";
import cartReducer from "./reducers/cartSlice";
import eventReducer from "./reducers/eventSlice";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  writer: writerReducer,
  admin: adminReducer,
  product: productReducer,
  cart: cartReducer,
  event: eventReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
