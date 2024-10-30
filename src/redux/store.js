import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import rootReducer from "../redux/rootReducer";

// Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["sidebar", "tables", "menuIndex" ],
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
// if (process.env.NODE_ENV === 'development') {
//   persistor.purge();
// }

export default store;
