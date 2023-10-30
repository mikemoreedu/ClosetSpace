import { React, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import Logo from "../../assets/images/ClotoureLogo.png";

import CustomInput from "../components/CustomInput";

import CustomButton from "../components/CustomButton";

const SignInScreen = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign In");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  };

  const onSignUpPressed = () => {
    console.warn("Sign Up");
  };

  const onSignInFacebook = () => {
    console.warn("Facebook");
  };

  const onSignInGoogle = () => {
    console.warn("Google");
  };

  const onSignInApple = () => {
    console.warn("Apple");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder={"Username"}
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          bgColor="#E7EAF4"
          fgColor="#4765A9"
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
        />

        <CustomButton
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
          text="Sign In with Google"
          onPress={onSignInGoogle}
        />

        <CustomButton
          bgColor="#e3e3e3  "
          fgColor="#363636"
          text="Sign In with Apple"
          onPress={onSignInApple}
        />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    borderStyle: "solid", // Default
    borderWidth: 2, // Border width
    borderColor: "blue", // Border color
  },
  logo: {
    width: "70%",
    maxHeight: 100,
    maxWidth: 500,
    borderWidth: 2, // Border width
    borderColor: "red", // Border color
  },
});

export default SignInScreen;
