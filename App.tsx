import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigation";
import { AuthProvider } from "./src/context/AuthContext";

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
      {/* <ProductsProvider>{children}</ProductsProvider> */}
    </AuthProvider>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
}
