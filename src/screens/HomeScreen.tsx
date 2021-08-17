import React from "react";
import { Button, StyleSheet, Text, View} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = () => {
  const {logOut} = useContext(AuthContext)
  return (
    <SafeAreaView>
      <Text>HOME SCREEN!!</Text>
      <Ionicons name="airplane-outline" size={24} color="black" />
      <Button
        title="Salir"
        onPress={() => {
          logOut()
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
