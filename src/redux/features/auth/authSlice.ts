import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mapedAuthError } from "./authFunctions";
import { AuthState, SignInParams } from "./AuthTypes";

const initialState: AuthState = {
  authenticationState: "Initial",
  logIn: {
    state: "Initial",
  },
};

export const signIn = createAsyncThunk<void, SignInParams>(
  "auth/signIn",
  async () => {
    console.log("Se ejecuto signIn");
    throw new Error("Ha ocurrido un error");
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInitialLogIn: (state) => {
      state.logIn = initialState.logIn;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.logIn = { state: "Submitting" };
    });
    builder.addCase(signIn.fulfilled, (state) => {
      state.logIn = {
        state: "Success",
      };
    });
    builder.addCase(signIn.rejected, (state, { error }) => {
      state.logIn = {
        state: "Failure",
        error: mapedAuthError(error),
      };
      state.user = undefined;
      console.log(error.message);
    });
  },
});

export const { setInitialLogIn } = authSlice.actions;

export default authSlice.reducer;
