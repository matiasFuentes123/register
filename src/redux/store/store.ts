import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";

// Configuraciones del Store de Redux (Siempre igual)
export const store = configureStore({
  // Aqui agregar todos los slice que se vayan a utilizar
  reducer: {
    auth: authSlice,
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
