import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from '../styling/stylesHome';

const Home = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    const handleButtonPress = (field) => {
        
    };

    const alphabetPressed = (field) => {
        navigation.navigate('AlphabetScreen', { category: field });
    };

    const wordsPressed = (field) => {
        navigation.navigate('WordsSentenceScreen', { category: field });
    };

    const mathPressed = (field) => {
        navigation.navigate('MathScreen', { category: field });
    };

    const sciencePressed = (field) => {
        navigation.navigate('ScienceScreen', { category: field });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Hello, Learner</Text>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={handleSearch}
            />

            <Text style={styles.text}>Indian Sign Language</Text>

            <View style={styles.learningContainer}>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => alphabetPressed('Alphabets and Numbers')}
                >
                    <ImageBackground 
                        source={require('../assets/alphabet.png')} 
                        style={styles.imageBackground} 
                        imageStyle={styles.imageStyle}
                    />
                <Text style={styles.buttonText}>Alphabets & Nums</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => wordsPressed('Words & Sentence')}
                >
                    <ImageBackground 
                        source={require('../assets/words.png')} 
                        style={styles.imageBackground} 
                        imageStyle={styles.imageStyle}
                    />
                        <Text style={styles.buttonText }>Words & Sentence</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => mathPressed('Mathematics')}
                >
                    <ImageBackground 
                        source={require('../assets/math.png')} 
                        style={styles.imageBackground} 
                        imageStyle={styles.imageStyle}
                    />
                        <Text style={styles.buttonText}>Mathematics</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => sciencePressed('Science')}
                >
                    <ImageBackground 
                        source={require('../assets/science.png')} 
                        style={styles.imageBackground} 
                        imageStyle={styles.imageStyle}
                    />
                        <Text style={styles.buttonText}>Science</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
    
};

export default Home;
