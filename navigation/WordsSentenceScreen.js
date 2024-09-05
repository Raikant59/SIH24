import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const WordsSentence = ({ route, navigation }) => {
    const { category } = route.params;
    const words = ['Word1', 'Word2', 'Word3', 'Word4', 'Word5', 'Word6'];

    const handlePress = (word) => {
        navigation.navigate('WordsDetailScreen', { item: word });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.categoryText}>{category}</Text>
            {words.map((word) => (
                <TouchableOpacity
                    key={word}
                    style={styles.button}
                    onPress={() => handlePress(word)}
                >
                    <Text style={styles.buttonText}>{word}</Text>
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

export default WordsSentence;
