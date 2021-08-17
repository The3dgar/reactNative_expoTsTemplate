import React from "react";
import { StyleSheet } from "react-native";

const LoginTheme = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    height: 600,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: "white",
    fontWeight: "bold",
  },
  inputField: {
    color: "white",
    fontSize: 20,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  buttonRegisterContainer: {
    position: "absolute",
    bottom: 50,
    right: 30
  },
  buttonGoLogin: {
    position: "absolute",
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
});

export default LoginTheme;
