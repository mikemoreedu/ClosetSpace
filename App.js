import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username or Email"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7} // Adjust the opacity when pressed
          onPress={() => {
            // Handle button press here
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.createAccountContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#aaffd6" }]}
          onPress={() => {
            // Handle "Create an account" press here
          }}
        >
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "#F4F4F4",
    height: 150,
    width: 250,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#E3E3E3",
    height: 40,
    width: "75%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    height: 40,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  createAccountContainer: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
});
