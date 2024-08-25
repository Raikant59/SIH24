// navigation/AlphabetDetailScreen.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import images from '../assets/imageMappings';

const AlphabetDetailScreen = ({ route }) => {
    const { item } = route.params;

    // Use the imported images to get the image source
    const imageSource = images[item] || images['default'];

    return (
        <View style={styles.container}>
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
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default AlphabetDetailScreen;