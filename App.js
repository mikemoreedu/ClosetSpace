import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View
      style={{
        backgroundColor: "#F4F4F4",
        height: 150,
        width: 250,
        borderRadius: 10,

    
    }}
      >
        <TextInput
        style={{
          backgroundColor: "#E3E3E3",
          height: 40,
          width: "75%",
          borderColor: 'gray',
          borderWidth: 1,
          marginTop: 5, 
          marginBottom: 5,  
        }}
        defaultValue="Username or Email"
      />
      <TextInput
        style={{
          backgroundColor: "#E3E3E3",
          height: 40,
          width: "75%",
          borderColor: 'gray',
          borderWidth: 1, 
          marginTop: 5, 
          marginBottom: 5,  
        }}
        defaultValue="Password"
      />
      <Button
      title = "Login"/>
      </View>


      <View>
        <Button
        title="Create an account"
        color={"#aaffd6"}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
