import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import {
  View,
  Image,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://10.10.198.22:3000/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        })
      });

      // Check if response is not JSON, then log and handle error
      if (response.headers.get("Content-Type")?.includes("application/json")) {
        const data = await response.json();
        console.log("data", data);

        if (response.ok) {
          try {
            await AsyncStorage.setItem('token', data.token);
            navigation.replace("Home");  // Ensure "Home" is the correct route name
          } catch (e) {
            console.log("Error storing token", e);
            Alert.alert("Error", e.message);
          }
        } else {
          Alert.alert("Error", data.message || "Signup failed");
        }
      } else {
        const responseText = await response.text();
        console.log("Unexpected response type:", responseText);
        Alert.alert("Error", "Unexpected server response");
      }
    } catch (error) {
      console.log("Network request failed", error);
      Alert.alert("Error", "Network request failed");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image 
          source={require('../assets/undraw_Sign_up_n6im-removebg-preview.png')} 
          style={{
            width: '100%',  
            height: 200,    
            resizeMode: 'contain',  
            marginTop: 20,  
          }}
        />
      <Text style={styles.header}>Create an account</Text>
      <View style={styles.separator} />
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
        style={styles.input}
        theme={{ colors: { primary: "blue" } }}
        onChangeText={setPassword}
      />
      <TextInput
        label='Confirm Password'
        mode="outlined"
        secureTextEntry
        value={confirmPassword}
        style={styles.input}
        theme={{ colors: { primary: "blue" } }}
        onChangeText={setConfirmPassword}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={handleSignUp}
      >
        Sign Up
      </Button>
      <View style={{ alignItems: 'center' }}>
        <Text
        style={{fontSize: 18, marginLeft: 18, marginTop: 20, color: 'black'}}
          onPress={() => navigation.navigate("LoginScreen")}  // Corrected route name
        >
          Already have an account? 
          <Text style={styles.link}> Log in</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    marginTop: 4
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
    backgroundColor: '#6C63FF'
  },
  link: {
    fontSize: 18,
    marginLeft: 18,
    marginTop: 20,
    color: 'blue',
  }
});

export default SignUpScreen;
