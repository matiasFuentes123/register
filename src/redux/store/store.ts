import { configureStore, Action } from "@reduxjs/toolkit";
// import authSlice from "../features/auth/authSlice";
import excersiseSlice from "../features/excersise/excersiseSlice";
import { ThunkAction } from "redux-thunk";

// Configuraciones del Store de Redux (Siempre igual)
export const store = configureStore({
  // Aqui agregar todos los slice que se vayan a utilizar
  reducer: {
    // auth: authSlice,
    excersise: excersiseSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infiere el tipo del Store
export type RootState = ReturnType<typeof store.getState>;

// Infiere el tipo del Store para usar en los Dispatch
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
