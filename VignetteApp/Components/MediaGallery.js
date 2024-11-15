// components/MediaGallery.js
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ImageGallery from './ImageGallery';
// import VideoPlayer from './VideoPlayer';

const MediaGallery = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageGallery uri={require('../assets/images/photo5.jpg')} />
      <ImageGallery uri={require('../assets/images/photo5.jpg')} />
      <ImageGallery uri={require('../assets/images/photo5.jpg')} />

      {/* <VideoPlayer uri={require('../assets/videos/video1.mp4')} />
      <VideoPlayer uri={require('../assets/videos/video2.mp4')} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default MediaGallery;
