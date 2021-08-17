import { StyleSheet } from "react-native";

const AuthTheme = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 20,
    marginBottom: 16,
    fontWeight: "bold",
    color: "black",
    fontSize: 30,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
    alignSelf: "stretch",
    marginBottom: 10,
    paddingHorizontal: 5,
    fontSize: 16,
    color: "black",
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  buttonRecovery: {
    position: "absolute",
    bottom: 30,
    right: 10,
  },
});
export default AuthTheme;
