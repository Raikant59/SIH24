import React, { useState } from 'react';
import { View, Image, StyleSheet, Button, Modal, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av'; // Import from expo-av
import images from '../assets/imageMappings'; // Import your image mappings
import videos from '../assets/videoMappings'; // Import video mappings

const AlphabetDetailScreen = ({ route }) => {
    const { item } = route.params;
    const [showVideo, setShowVideo] = useState(false);

    // Use the imported images to get the image source
    const imageSource = images[item] || images['default'];
    const videoSource = videos[item] || videos['default'];

    const handleShowVideo = () => {
        setShowVideo(true);
    };

    const handleClose = () => {
        setShowVideo(false);
    };

    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.fullscreenImage} />
            {!showVideo && (
                <TouchableOpacity style={styles.button} onPress={handleShowVideo}>
                    <Text style={styles.buttonText}>Show Video</Text>
                </TouchableOpacity>
            )}
            {showVideo && (
                <Modal
                    transparent={true}
                    visible={showVideo}
                    onRequestClose={handleClose}
                >
                    <View style={styles.modalContainer}>
                        <Video
                            source={videoSource}
                            style={styles.fullscreenVideo}
                            useNativeControls
                            resizeMode="contain"
                            shouldPlay
                        />
                        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        position: 'absolute',
        bottom: 30,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    fullscreenImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    fullscreenVideo: {
        width: '100%',
        height: '100%',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    closeButton: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#FF5733',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default AlphabetDetailScreen;
