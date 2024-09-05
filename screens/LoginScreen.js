import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, Image, Text, StatusBar, KeyboardAvoidingView, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();  // Ensure hooks are called at the top level

  const sendCred = async () => {
    try {
      const response = await fetch("http://10.10.198.22:3000/signin", { // Consider moving URL to config
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();

      if (data.token) {
        await AsyncStorage.setItem('token', data.token);
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", "Invalid credentials or no token received");
      }
    } catch (error) {
      Alert.alert("Error", error.message || "An error occurred");
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" style={styles.keyboardAvoidingView}>
        <StatusBar barStyle="light-content" />
        <Image 
          source={require('../assets/undraw_Login_re_4vu2-removebg-preview.png')} 
          style={styles.image}
        />
        <Text style={styles.header}>Welcome! Learner</Text>
        <View style={styles.separator} />
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
          label='Email'
          mode="outlined"
          value={email}
          style={styles.input}
          theme={{ colors: { primary: "blue" } }}
          onChangeText={setEmail}
        />
        <TextInput
          label='Password'
          mode="outlined"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          theme={{ colors: { primary: "blue" } }}
        />
        <Button
          mode="contained"
          style={styles.button}
          onPress={sendCred} 
        >
          Login
        </Button>
        <Button
          mode="text"
          style={styles.signUpButton}
          labelStyle={{ color: '#6C63FF' }} 
          onPress={() => navigation.navigate("SignUp")}
        >
          Don't have an account? Sign Up
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  header: {
    fontSize: 35,
    marginLeft: 18,
    marginTop: 10,
    color: "#3b3b3b",
  },
  separator: {
    borderBottomColor: "#6C63FF",
    borderBottomWidth: 4,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 150,
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    marginLeft: 18,
    marginTop: 20,
  },
  input: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 18,
  },
  button: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 18,
    backgroundColor: '#6C63FF',
  },
  signUpButton: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 18,
  },
});

export default LoginScreen;
