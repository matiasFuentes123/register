import { FormState } from "../../../models/FormState";
import { User } from "../../../models/User";
/**
 * Estados posibles de la autenticacion
 */
export type AuthenticationState =
  | "Initial"
  | "Unauthenticated"
  | "Authenticated";

export type AuthState = {
  user?: User;
  authenticationState: AuthenticationState;
  logIn: {
    state: FormState;
    error?: string;
  };
  signOut: {
    isLoading: boolean;
  };
};

export type SignInParams = {
  email: string;
  password: string;
};

export type UserRegisterData = {
  user: {
    Email: string;
    Password: string;
    Telefono?: string;
    Nombre: string;
    TerminosYCondiciones: boolean;
  };
};
