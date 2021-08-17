import { LoginResponse } from "../interface/authInterface";

export interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  token: string | null;
  errorMessage: string;
  user: LoginResponse | null;
}

type AuthAction =
  | { type: "signUp"; payload: LoginResponse }
  | { type: "addError"; payload: string }
  | { type: "removeError" }
  | { type: "notAuthenticated" }
  | { type: "logout" };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "addError":
      return {
        ...state,
        user: null,
        token: null,
        status: "not-authenticated",
        errorMessage: action.payload,
      };
    case "removeError":
      return {
        ...state,
        errorMessage: "",
      };
    case "signUp":
      return {
        ...state,
        errorMessage: "",
        status: "authenticated",
        token: action.payload.token,
        user: action.payload,
      };
    case "logout":
    case "notAuthenticated":
      return {
        ...state,
        status: "not-authenticated",
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
