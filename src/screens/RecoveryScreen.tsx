import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View, TextInput, TouchableHighlight, Alert } from "react-native";
import appApi from "../api/appApi";
import BackButton from "../components/BackButton";
import WhiteLogo from "../components/WhiteLogo";
import { useForm } from "../hooks/useForm";
import AuthTheme from "../theme/AuthTheme";

interface Props extends StackScreenProps<any, any> {}

const RecoveryScreen = ({ navigation }: Props) => {
  const { form, onChange } = useForm({
    email: "",
  });

  const { email } = form;

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert("Campos requeridos", "Por favor complete los campos");
      return;
    }

    await appApi.get(`usuarioSistema/correo/${email}`);

    Alert.alert(
      "Exito!",
      "Si el correo existe, se enviaran las instrucciones para recuperar su cuenta",
      [
        {
          text: "Ir a inicio",
          onPress: () => {
            navigation.navigate("LoginScreen");
          },
        },
      ]
    );
  };

  return (
    <View style={AuthTheme.container}>
      <BackButton />
      <WhiteLogo />
      <Text style={AuthTheme.title}>Recuperar cuenta</Text>
      <TextInput
        placeholderTextColor="rgba(255,255,255,0.4)"
        style={AuthTheme.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={onChange("email")}
      ></TextInput>

      <TouchableHighlight
        underlayColor={"#eee"}
        style={AuthTheme.button}
        activeOpacity={0.1}
        onPress={handleSubmit}
      >
        <Text style={AuthTheme.buttonText}>Recuperar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default RecoveryScreen;
