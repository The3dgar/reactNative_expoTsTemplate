import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color="black" size={50} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
