import authFirebase from "@react-native-firebase/auth";
import firestoreFirebase from "@react-native-firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mapedAuthError } from "./authFunctions";
import {
  AuthenticationState,
  AuthState,
  SignInParams,
  UserRegisterData,
} from "./AuthTypes";

// Esado inciai de Store
const initialState: AuthState = {
  // Mantiene el estado del inicio de sesion global del usuario
  authenticationState: "Initial",
  // Mantiene el estado del inicio de sesion del formulario
  logIn: {
    state: "Initial",
  },
  // Mantiene el estado del cerrar sesion (Como indique no siempre es instantaneo y suele demorar un segundo o mas.)
  signOut: {
    isLoading: false,
  },
};

export const signIn = createAsyncThunk<void, SignInParams>(
  "auth/signIn",
  async (params) => {
    // obtengo los parametros de la funcion
    const { email, password } = params;
    // se crea el usuario en authentication de firebase
    await authFirebase().signInWithEmailAndPassword(email, password);
  }
);

// Contiene la funcion para desuscribirse del observable de usuario
let userUnsuscriber: VoidFunction;
// Contiene la funcion para desuscribirse del estado de autenticacion
let authStateUnsusbcriber: VoidFunction;

export const subscribeToUser = createAsyncThunk(
  "auth/subscribeUser",
  (_, { dispatch }) => {
    // Se valida si existe una subscripcion anterior
    authStateUnsusbcriber && authStateUnsusbcriber();
    // Se empieza a hacer escucha de cambios en la autenticacion (Authentication Firebase)
    authStateUnsusbcriber = authFirebase().onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        dispatch(authSlice.actions.setAuthState("Unauthenticated"));
        return;
      }

      // Se valida si existe una subscripcion anterior
      userUnsuscriber && userUnsuscriber();
      // Se realiza la query para obtener el documento del usuario
      userUnsuscriber = firestoreFirebase()
        .collection("Usuarios")
        .doc(currentUser.uid)
        // Se empieza a hacer escucha de cambios en el documento (Firestore Firebase)
        .onSnapshot((snap) => {
          if (!snap || !snap.exists || !snap.data()) {
            dispatch(authSlice.actions.setAuthState("Unauthenticated"));
            return;
          }
          const user = {
            ...(snap.data() as any),
            id: snap.id,
          };
          dispatch(authSlice.actions.setUser(user));
        });

      dispatch(authSlice.actions.setAuthState("Authenticated"));
    });
  }
);

export const registerUserByEmail = createAsyncThunk<void, UserRegisterData>(
  "auth/registerUserByEmail",
  async (data) => {
    //Aqui se crea el usuario en authentication
    const userCredential = await authFirebase().createUserWithEmailAndPassword(
      data.user.Email,
      data.user.Password
    );
    // Aqui se envian los datos a firebase y se crea el documento
    await firestoreFirebase()
      .collection("Usuarios")
      .doc(userCredential.user.uid)
      .set({
        Email: data.user.Email,
        Nombre: data.user.Nombre || "",
        // este dato siempre es necesario para saber cunado se creo el usaurio.
        // esta funcion de base de firebase `firestoreFirebase.FieldValue.serverTimestamp()`
        // hace que se se ponga la fecha del servidor en el momento que se suba el documento a firestore
        FechaCreacion: firestoreFirebase.FieldValue.serverTimestamp(),
        Imagen: "",
        ImagenUri: "",
        Estado: "Activo",
        TipoUsuario: "Usuario",
        PerfilCompleto: false,
        TerminosYCondiciones: data.user.TerminosYCondiciones,
        Telefono: data.user.Telefono,
      });
  }
);

export const singOut = createAsyncThunk("auth/signOut", async () => {
  // simplemente llama la funcion de firebase para cerrar sesion
  await authFirebase().signOut();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // aqui se colocan todos los reducers que modifican el estado de forma sincrona
  reducers: {
    setInitialLogIn: (state) => {
      state.logIn = initialState.logIn;
    },
    setAuthState: (state, { payload }: { payload: AuthenticationState }) => {
      state.authenticationState = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  // aqui se colocan todos los reducers que modifican el estado de forma asincrona
  extraReducers: (builder) => {
    // todas las peticiones tienen 3 estados posibles, `pending`, `fulfilled`, `rejected`
    // se debe administrar los estados para poder modificar el Store

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

    //signOut
    builder.addCase(singOut.pending, (state) => {
      state.signOut = { isLoading: true };
    });
    builder.addCase(singOut.fulfilled, (state) => {
      state.signOut = { isLoading: false };
      state.authenticationState = "Unauthenticated";
    });
    builder.addCase(singOut.rejected, (state) => {
      state.signOut = { isLoading: false };
      state.authenticationState = "Unauthenticated";
    });
  },
});

// Aqui solo se exportan las funciones sincronas que se vayan a utilizar fuera de este archivo.
export const { setInitialLogIn } = authSlice.actions;

export default authSlice.reducer;
