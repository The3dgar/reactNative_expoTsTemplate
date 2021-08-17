import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: add env files,

const baseURL = "http://192.168.100.18:3000/api";
const appApi = axios.create({ baseURL });

appApi.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers["authorization"] = token;
  }

  return config;
});

export default appApi;
