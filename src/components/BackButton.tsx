import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, StyleSheet, StatusBar } from "react-native";

export default function BackButton() {
  const { currentHeight } = StatusBar;
  const top = currentHeight ? currentHeight + 0 : 50;

  const { goBack } = useNavigation();
  return (
    <TouchableOpacity onPress={goBack} style={{ ...styles.container, top }}>
      <Image
        style={styles.image}
        source={require("../../assets/arrow_back.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});
