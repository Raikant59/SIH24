import React, { useState } from 'react';
import { View, Image, Text, TextInput, Button, StyleSheet } from 'react-native';
import images from '../assets/imageMappings'; // Import your image mappings
import questions from '../assets/questions'; // Import the questions

const TestScreen = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [feedback, setFeedback] = useState('');

    // Get current question
    const { image, answer } = questions[currentQuestionIndex];

    const handleSubmit = () => {
        if (inputValue.trim().toUpperCase() === answer) {
            setFeedback('Correct!');
        } else {
            setFeedback('Incorrect. Try again.');
        }
    };

    const handleNext = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
        setInputValue('');
        setFeedback('');
    };

    return (
        <View style={styles.container}>
            <Image source={images[image]} style={styles.image} />
            <Text style={styles.question}>What image sign is this?</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your answer"
                value={inputValue}
                onChangeText={setInputValue}
            />
            <Button title="Submit" onPress={handleSubmit} />
            {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
            <Button title="Next" onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    question: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    feedback: {
        fontSize: 16,
        marginTop: 20,
        color: 'green',
    },
});

export default TestScreen;
