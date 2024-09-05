import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import images from '../assets/imageMappings'; // Import your image mappings
import questions from '../assets/questions'; // Import the questions

const TestScreen = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [feedback, setFeedback] = useState('');
    const [score, setScore] = useState(0);  // Track correct answers

    // Get current question
    const { image, answer } = questions[currentQuestionIndex];

    const handleSubmit = () => {
        if (inputValue.trim().toUpperCase() === answer.toUpperCase()) {
            setFeedback('Correct!');
            setScore(score + 1);  // Increment score on correct answer
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
            <Text style={styles.scoreText}>
                Question {currentQuestionIndex + 1}/{questions.length} - Score: {score}
            </Text>
            <Image source={images[image]} style={styles.image} />
            <Text style={styles.question}>What image sign is this?</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your answer"
                value={inputValue}
                onChangeText={setInputValue}
                autoCapitalize="words"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            {feedback ? <Text style={[styles.feedback, feedback === 'Correct!' ? styles.correct : styles.incorrect]}>{feedback}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.scoreText}>{setScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',  // Light background for better contrast
        padding: 20,
    },
    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#007bff',  // Blue text for score
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000', // Shadow for 3D effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    question: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',  // Dark color for better readability
    },
    input: {
        width: '100%',
        borderColor: '#007bff',  // Blue border
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#fff',  // White background
        shadowColor: '#000',  // Shadow for 3D effect
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    button: {
        backgroundColor: '#007bff',  // Blue background
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',  // White text
        fontSize: 16,
        fontWeight: 'bold',
    },
    feedback: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
    },
    correct: {
        color: 'green',
    },
    incorrect: {
        color: 'red',
    },
});

export default TestScreen;
