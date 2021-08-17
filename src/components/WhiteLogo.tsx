import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const WhiteLogo = () => {
  return (
    <View style={{ alignItems: "center", backgroundColor: "blue" }}>
      <Image
        source={require("../../assets/react-logo-white.png")}
        style={{ height: 100, width: 110 }}
      />
    </View>
  );
};

export default WhiteLogo;

const styles = StyleSheet.create({});
