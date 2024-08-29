// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { getAuth, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';

// // Configure Google Sign-In
// GoogleSignin.configure({
//   webClientId: '670441457779-bcetas1c129bj9d389nrlsv8fsjisnis.apps.googleusercontent.com',
// });

// export default function LoginScreen({ setIsLoggedIn }) {
//   const [userInfo, setUserInfo] = useState(null);
//   const [error, setError] = useState(undefined);
//   const auth = getAuth(); // Initialize Firebase Auth

//   const _signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       setUserInfo(userInfo);
//       setError(undefined);

//       // Create a Google credential with the idToken
//       const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);

//       // Sign in with the credential
//       await signInWithCredential(auth, googleCredential);

//       // Update login status on successful sign-in
//       setIsLoggedIn(true);
//     } catch (error) {
//       if (error.code) {
//         switch (error.code) {
//           case statusCodes.SIGN_IN_CANCELLED:
//             // user cancelled the login flow
//             console.log('User cancelled the login flow');
//             break;
//           case statusCodes.IN_PROGRESS:
//             // operation (e.g., sign in) already in progress
//             console.log('Sign in operation in progress');
//             break;
//           case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
//             // play services not available or outdated
//             console.log('Google Play services not available or outdated');
//             break;
//           default:
//             // some other error happened
//             console.log('Some other error happened:', error.message);
//         }
//       } else {
//         // an error that's not related to Google sign-in occurred
//         console.log('An unknown error occurred:', error);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={styles.title}>Welcome</Text>
//       </View>
//       <View>
//         <TouchableOpacity onPress={_signIn} style={styles.signInButton}>
//           <Text style={styles.buttonText}>Sign in with Google</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setIsLoggedIn(true)} // Correct the navigation function to update login status
//           style={styles.signUpButton}
//         >
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// // Styles for the component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 30,
//     margin: 20,
//   },
//   signInButton: {
//     padding: 15,
//     borderRadius: 25,
//     backgroundColor: '#4285F4',
//     marginVertical: 10,
//   },
//   signUpButton: {
//     padding: 15,
//     borderRadius: 25,
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
// });



import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ setIsLoggedIn }) => {
    return (
        <View>
            <Text>Login</Text>
            <Button 
                title="Login" 
                onPress={() => setIsLoggedIn(true)} 
            />
        </View>
    );
}

export default LoginScreen;
