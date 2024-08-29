// navigation/ImageScreen.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ImageScreen = ({ route }) => {
    const { value } = route.params;
    // Assuming images are named according to the value (e.g., 'A.png', '1.png')
    const imageSource = {
        'A': require('../assets/A.png'),
        'B': require('../assets/B.png'),
        // Add more images here for other letters and numbers
        '0': require('../assets/0.png'),
        '1': require('../assets/1.png'),
        // ...
    }[value] || require('../assets/default.png'); // Default image if not found

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{value}</Text>
            <Image source={imageSource} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 300,
    },
});

export default ImageScreen;
