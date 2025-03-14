
import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import flashcardReducer from "./flashcardsSlice"

const persistConfig = {
    key: "root",
    storage, // local storage 
  };
const persistedReducer = persistReducer(persistConfig, flashcardReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });
  
  

  export type RootState = ReturnType<typeof store.getState>; // This will infer the correct type for state
  export type AppDispatch = typeof store.dispatch;
  export const persistor = persistStore(store); // data will be stored to localstorage 
  export default store;