import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Background = () => {
  return <View style={styles.container}></View>;
};

export default Background;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#5856d6",
    width: 1000,
    height: 1200,
    top: -250,
    transform: [{ rotate: "-30deg" }],
  },
});
