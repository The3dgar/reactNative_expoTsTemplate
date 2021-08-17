import React, { useReducer, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginRequest, LoginResponse } from "../interface/authInterface";
import { authReducer, AuthState } from "./AuthReducer";
import appApi from "../api/appApi";

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: LoginResponse | null;
  status: "checking" | "authenticated" | "not-authenticated";
  // signUp: (obj: RegisterData) => void;
  signIn: (obj: LoginRequest) => void;
  logOut: () => void;
  removeError: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

const authInitialState: AuthState = {
  status: "checking",
  token: null,
  user: null,
  errorMessage: "",
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    console.log("checkeando");
    const token = await AsyncStorage.getItem("token");
    if (!token) return dispatch({ type: "notAuthenticated" });

    try {
      const { data, status } = await appApi.get<LoginResponse>(
        "/usuarioSistema/validar-sesion"
      );

      if (status !== 200) return dispatch({ type: "notAuthenticated" });

      dispatch({
        type: "signUp",
        payload: data,
      });

      await AsyncStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error.toString());
    }
  };

  const signIn = async (payload: LoginRequest) => {
    try {
      const { data } = await appApi.post<LoginResponse>(
        "/usuario/login",
        payload
      );

      if (!Object.keys(data).length) throw "Datos incorrectos";

      console.log("data:", data, !!data);

      dispatch({
        type: "signUp",
        payload: data,
      });

      await AsyncStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error.toString());

      dispatch({
        type: "addError",
        payload: "Datos incorrectos",
      });
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "logout" });
  };

  // const signUp = async (obj: RegisterData) => {
  //   try {
  //     const {data} = await appApi.post<LoginResponse>("/usuarios", obj)

  //     const {token, usuario} = data
  //     dispatch({
  //       type: "signUp",
  //       payload: {
  //         token,
  //         user: usuario,
  //       },
  //     });

  //     await AsyncStorage.setItem("token", token);

  //   } catch (error) {
  //     console.log(error.response.data);

  //     dispatch({
  //       type: "addError",
  //       payload: error.response.data.errors[0].msg || "Incorrect data",
  //     });
  //   }
  // };

  const removeError = () => {
    dispatch({ type: "removeError" });
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        // signUp,
        signIn,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
