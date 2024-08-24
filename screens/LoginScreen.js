import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [isInProgress, setIsInProgress] = useState(false);

    // Configure Google Signin
    GoogleSignin.configure({
        webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    });

    const signIn = async () => {
        try {
            setIsInProgress(true); // Disable button while signing in
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUserInfo(userInfo);
            // After successful sign-in, navigate to the Home screen
            navigation.navigate('Home');
        } catch (error) {
            if (error.code) {
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        console.log('User cancelled the login flow');
                        break;
                    case statusCodes.IN_PROGRESS:
                        console.log('Operation (e.g. sign in) already in progress');
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        console.log('Play services not available or outdated');
                        break;
                    default:
                        console.log('Some other error happened', error);
                }
            } else {
                console.log('An error not related to Google sign-in occurred', error);
            }
        } finally {
            setIsInProgress(false); // Re-enable button after signing in
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            
            {/* Google Sign-In Button */}
            <GoogleSigninButton
                style={styles.googleSigninButton}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                disabled={isInProgress}
            />

            {/* Other Login and Signup buttons */}
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    googleSigninButton: {
        width: 192,
        height: 48,
        marginBottom: 20,
    },
    loginButton: {
        backgroundColor: '#d9534f',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 10,
    },
    signupButton: {
        backgroundColor: '#5cb85c',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
