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

    return (
        <ScrollView contentContainerStyle={styles.container}>
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
                        <Text style={styles.buttonText }>Words & Sentence</Text>
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
    );
};

export default Home;
