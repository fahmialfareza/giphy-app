import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import reducers
import rootReducers from "./reducers";

const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
