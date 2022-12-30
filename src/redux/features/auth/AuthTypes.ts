import { FormState } from "../../../models/FormState";
import { User } from "../../../models/User"

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
}

export type SignInParams = {
  email: string;
  password: string;
}