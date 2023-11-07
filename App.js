import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";
import SignInScreen from "./src/pages/SignInScreen";
//import * as React from 'react';
import MainContainer from './navigation/maincontainer';

//TODO: link navbar functionality after sign-in is complete


export default function App() {


  return (
    /*<View style={styles.root}>
      <SignInScreen></SignInScreen>
    </View>*/
    /*// Switch these to get functionality of log in page or navbar*/
    <MainContainer/>
   
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
