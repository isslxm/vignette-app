// components/VideoPlayer.js
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import FullScreenVideo from './FullScreenVideo';

const { width } = Dimensions.get('window');

const VideoPlayer = ({ uri }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsFullScreen(true)}>
        <Video
          style={styles.video}
          source={uri}
          resizeMode="contain"
          shouldPlay={false}
        />
      </TouchableOpacity>

      <FullScreenVideo
        visible={isFullScreen}
        onClose={() => setIsFullScreen(false)}
        videoUri={uri}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    width: width * 0.95, // Make the video container width responsive
  },
  video: {
    width: '100%',
    height: (width * 0.95 * 9) / 16, // Maintain a 16:9 aspect ratio for the video
  },
});

export default VideoPlayer;
