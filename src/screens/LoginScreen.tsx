import React, { useContext } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Text, View, TextInput, TouchableHighlight, Alert } from "react-native";
import Background from "../components/Background";
import WhiteLogo from "../components/WhiteLogo";
import { useForm } from "../hooks/useForm";
import AuthTheme from "../theme/AuthTheme";
import { AuthContext } from "../context/AuthContext";

interface Props extends StackScreenProps<any, any> {}

const LoginScreen = ({ navigation }: Props) => {
  const { signIn } = useContext(AuthContext);

  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleSubmit = () => {
    // if (!email || !password) {
    //   Alert.alert("Campos requeridos", "Por favor complete los campos");
    //   return;
    // }

    signIn({ email: "edgarolivar16@gmail.com", password: "123456" });
  };

  return (
    <View style={AuthTheme.container}>
      {/* <Background /> */}
      <WhiteLogo />
      <Text style={AuthTheme.title}>Bienvenido</Text>
      <TextInput
        placeholderTextColor="rgba(255,255,255,0.4)"
        style={AuthTheme.input}
        placeholder="RUT"
        autoCapitalize="none"
        value={email}
        onChangeText={onChange("email")}
      ></TextInput>

      <TextInput
        placeholderTextColor="rgba(255,255,255,0.4)"
        style={AuthTheme.input}
        placeholder="Contraseña"
        autoCapitalize="none"
        value={password}
        onChangeText={onChange("password")}
        secureTextEntry={true}
      ></TextInput>

      <View style={AuthTheme.buttonRecovery}>
        <TouchableHighlight
          underlayColor={"#eee"}
          style={AuthTheme.button}
          activeOpacity={0.1}
          onPress={() => navigation.navigate("RecoveryScreen")}
        >
          <Text style={AuthTheme.buttonText}>¿Olvidaste la contraseña?</Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight
        underlayColor={"#eee"}
        style={AuthTheme.button}
        activeOpacity={0.1}
        onPress={handleSubmit}
      >
        <Text style={AuthTheme.buttonText}>Ingresar</Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor={"#eee"}
        style={AuthTheme.button}
        activeOpacity={0.1}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={AuthTheme.buttonText}>Registrarse</Text>
      </TouchableHighlight>
    </View>
  );
};

export default LoginScreen;
