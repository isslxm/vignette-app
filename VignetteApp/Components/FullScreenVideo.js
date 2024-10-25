import React from 'react';
import { Modal, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window');

const FullScreenVideo = ({ visible, onClose, videoUri }) => {
  const video = React.useRef(null);

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.videoContainer}>
          <Video
            ref={video}
            style={styles.video}
            source={videoUri}
            useNativeControls
            resizeMode="contain"
            shouldPlay
          />
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: width,
    height: (width * 9) / 16, // Maintain a 16:9 aspect ratio
  },
  video: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#ff5555',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FullScreenVideo;
