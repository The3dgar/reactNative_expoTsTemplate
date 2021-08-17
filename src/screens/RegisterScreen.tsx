import React, { useContext, useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import { useForm } from "../hooks/useForm";
import LoginTheme from "../theme/LoginTheme";
import WhiteLogo from "../components/WhiteLogo";
import { AuthContext } from "../context/AuthContext";

interface Props extends StackScreenProps<any, any> {}

const RegisterScreen = ({ navigation }: Props) => {
  const { errorMessage, removeError } = useContext(AuthContext);

  const { email, password, name, onChange } = useForm({
    email: "",
    password: "",
    name: "",
  });

  const onRegister = () => {
    Keyboard.dismiss();
    if (!email.length || !password.length || !name) return;
    console.log(email, password, name);
    // signUp({ correo: email, password, nombre: name });
  };

  useEffect(() => {
    if (!errorMessage.length) return;
    Alert.alert("Ups", errorMessage, [{ text: "Ok", onPress: removeError }]);
  }, [errorMessage]);

  return (
    <>
      {/* Form */}

      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#5856d6" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={LoginTheme.formContainer}>
          <WhiteLogo />

          <Text style={LoginTheme.title}>Crear Cuenta</Text>
          {/* name */}
          <Text style={LoginTheme.label}>Name</Text>
          <TextInput
            placeholder="Your name ✨"
            placeholderTextColor="rgba(255,255,255,0.4)"
            style={LoginTheme.inputField}
            selectionColor="#7eb"
            autoCapitalize="sentences"
            onChangeText={onChange("name")}
            value={name}
          />
          {/* email */}
          <Text style={LoginTheme.label}>Email</Text>
          <TextInput
            placeholder="Type your email:"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            textContentType="emailAddress"
            style={LoginTheme.inputField}
            selectionColor="#7eb"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChange("email")}
            value={email}
          />
          {/* password */}
          <Text style={LoginTheme.label}>Password</Text>
          <TextInput
            placeholder="***********"
            secureTextEntry
            placeholderTextColor="rgba(255,255,255,0.4)"
            style={LoginTheme.inputField}
            selectionColor="#7eb"
            onChangeText={onChange("password")}
            value={password}
          />

          {/* button login */}
          <View style={LoginTheme.buttonContainer}>
            <TouchableOpacity activeOpacity={0.2} style={LoginTheme.button}>
              <Text style={LoginTheme.buttonText} onPress={onRegister}>
                Create account
              </Text>
            </TouchableOpacity>
          </View>

          {/* button register */}
          {/* <View style={LoginTheme.buttonRegisterContainer}> */}
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.replace("LoginScreen")}
            style={LoginTheme.buttonGoLogin}
          >
            <Text style={LoginTheme.buttonText}>Volver</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterScreen;
