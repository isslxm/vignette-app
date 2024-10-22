// components/VideoPlayer.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = ({ uri }) => {
  const video = React.useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={uri}
        useNativeControls
        resizeMode="contain"
        shouldPlay={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  video: {
    width: 300,
    height: 300,
  },
});

export default VideoPlayer;
