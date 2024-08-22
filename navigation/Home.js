import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styling/styles';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);
        // Add your search logic here
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <Text style={styles.text}>Home</Text>
        </View>
    );
}

export default Home;
