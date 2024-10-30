import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import rootReducer from "../redux/rootReducer";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sidebar", "tables" ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Create redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
