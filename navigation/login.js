import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
    },
});

export default Login;
