import * as React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import {
  
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
  } from "react-native";

export default function SearchScreen({ navigation }) {
    return (
        /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Search Screen</Text>
        </View>*/
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

        <CustomButton
         text="Sign In" 
         onpress={() => Navigation.navigate('Home')}
        />

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
}