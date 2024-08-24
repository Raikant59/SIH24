<<<<<<< HEAD
// navigation/Home.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styles from '../styling/stylesHome';

const Home = ({ navigation }) => {
=======
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styling/styles';

const Home = () => {
>>>>>>> 939530d1280b356c20a571735ee551895d4f8ace
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);
        // Add your search logic here
    };

<<<<<<< HEAD
    const handleButtonPress = (field) => {
        
    };

    const alphabetPressed = (field) => {
        navigation.navigate('Alphabet', { category: field });
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
=======
    return (
        <View style={styles.container}>
>>>>>>> 939530d1280b356c20a571735ee551895d4f8ace
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
<<<<<<< HEAD
            <Text style={styles.text}>Hi, ABC</Text>

            <View style={styles.learningContainer}>
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => alphabetPressed('Alphabets and Numbers')}
                >
                    <ImageBackground 
                        source={require('../assets/alphabet.jpg')} 
                        style={styles.imageBackground} 
                        imageStyle={styles.imageStyle}
                    >
                        <Text style={styles.buttonText}>Alphabets and Numbers</Text>
                    </ImageBackground>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => handleButtonPress('Words & Sentence')}
                >
                    <ImageBackground 
                        source={require('../assets/words.jpg')} 
                        style={styles.imageBackground} 
                        imageStyle={styles.imageStyle}
                    >
                        <Text style={styles.buttonText}>Words & Sentence</Text>
                    </ImageBackground>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => handleButtonPress('Mathematics')}
                >
                    <ImageBackground 
                        source={require('../assets/math.jpg')} 
                        style={styles.imageBackground} 
                        imageStyle={styles.imageStyle}
                    >
                        <Text style={styles.buttonText}>Mathematics</Text>
                    </ImageBackground>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => handleButtonPress('Science')}
                >
                    <ImageBackground 
                        source={require('../assets/science.jpg')} 
                        style={styles.imageBackground} 
                        imageStyle={styles.imageStyle}
                    >
                        <Text style={styles.buttonText}>Science</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </ScrollView>
=======
            <Text style={styles.text}>Home</Text>
        </View>
>>>>>>> 939530d1280b356c20a571735ee551895d4f8ace
    );
}

export default Home;
