import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();  // Ensure hooks are called at the top level

  const sendCred = async () => {
    try {
      console.log("chal raha hai");

      const response = await fetch("http://10.10.198.22:3000/signin", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "email": email,
          "password": password
        })
      });

      const data = await response.json();
      console.log("data", data);

      try {
        await AsyncStorage.setItem('token', data.token);
        navigation.navigate("Home");
      } catch (e) {
        console.log("Error storing token", e);
        Alert.alert("Error", e.message);
      }
    } catch (error) {
      console.log("Network request failed", error);
      Alert.alert("Error", "Network request failed");
    }
  };

  return (
    <>
      <KeyboardAvoidingView behavior="position">
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={{ fontSize: 35, marginLeft: 18, marginTop: 10, color: "#3b3b3b" }}>Welcome to</Text>
        <Text style={{ fontSize: 30, marginLeft: 18, color: "blue" }}>Indian Sign Language</Text>
        <View
          style={{
            borderBottomColor: "blue",
            borderBottomWidth: 4,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 150,
            marginTop: 4
          }}
        />
        <Text style={{ fontSize: 20, marginLeft: 18, marginTop: 20 }}>Login with email</Text>
        <TextInput
          label='Email'
          mode="outlined"
          value={email}
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label='Password'
          mode="outlined"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          theme={{ colors: { primary: "blue" } }}
        />
        <Button
          mode="contained"
          style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
          onPress={sendCred} 
        >
          Login
        </Button>
        <Button
            mode="text"
            style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
            onPress={() => navigation.navigate("SignUp")}
        >

            Don't have an account? Sign Up
        </Button>

      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
