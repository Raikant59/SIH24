// navigation/AlphabetScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AlphabetScreen = ({ route, navigation }) => {
    const { category } = route.params;
    
    // Letters and numbers arrays
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const numbers = Array.from({ length: 10 }, (_, i) => i.toString());

    // Combine letters and numbers
    const items = category === 'Alphabets and Numbers' ? [...letters, ...numbers] : letters;

    const handlePress = (item) => {
        navigation.navigate('AlphabetDetail', { item });
    };

    return (        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.categoryText}>{category}</Text>
            {items.map((item) => (
                <TouchableOpacity
                    key={item}
                    style={styles.button}
                    onPress={() => handlePress(item)}
                >
                    <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    button: {
        width: '100%',
        padding: 20,
        marginVertical: 5,
        backgroundColor: '#ddd',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    categoryText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default AlphabetScreen;
