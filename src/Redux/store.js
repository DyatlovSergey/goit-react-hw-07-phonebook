import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

const store = configureStore({
  reducer: { phonebook: contactsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
