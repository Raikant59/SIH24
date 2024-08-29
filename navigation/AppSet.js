import React from 'react';
import { View, Text, StyleSheet, Settings } from 'react-native';

const AppSet = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings</Text>
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

export default AppSet;
