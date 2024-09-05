import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import images from '../assets/imageMappings'; 
import questions from '../assets/questions'; 

const { height: screenHeight } = Dimensions.get('window');

const TestScreen = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [feedback, setFeedback] = useState('');
    const [score, setScore] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false); 

    const { image, answer } = questions[currentQuestionIndex];

    const handleSubmit = () => {
        if (hasAnswered) {
            return; 
        }
        
        if (inputValue.trim().toUpperCase() === answer.toUpperCase()) {
            setFeedback('Correct!');
            setScore(prevScore => prevScore + 1); 
        } else {
            setFeedback('Incorrect. Try again.');
        }

        setHasAnswered(true); 
    };

    const handleNext = () => {
        setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % questions.length);
        setInputValue('');
        setFeedback('');
        setHasAnswered(false); 
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.scoreText}>
                    Question {currentQuestionIndex + 1}/{questions.length} - Score: {score}
                </Text>
                <View style={styles.imageContainer}>
                    <Image source={images[image]} style={styles.image} />
                </View>
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
                {feedback ? (
                    <Text
                        style={[
                            styles.feedback,
                            feedback === 'Correct!' ? styles.correct : styles.incorrect,
                        ]}
                    >
                        {feedback}
                    </Text>
                ) : null}
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    scrollContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#007bff',
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.35,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 20,
        justifyContent: 'center',  
        alignItems: 'center',      
    },
    image: {
        width: '120%',
        height: '100%',
        resizeMode: 'contain',
    },
    question: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: '100%',
        borderColor: '#007bff',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    button: {
        backgroundColor: '#6C63FF',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
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
