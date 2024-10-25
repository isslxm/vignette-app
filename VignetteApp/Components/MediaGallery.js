// components/MediaGallery.js
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ImageGallery from './ImageGallery';
import VideoPlayer from './VideoPlayer';

const mediaData = [
  { id: '1', type: 'image', uri: require('../assets/images/photo3.jpg') },
  { id: '2', type: 'video', uri: require('../assets/videos/video1.mp4') },
  { id: '3', type: 'image', uri: require('../assets/images/photo3.jpg') },
];

const MediaGallery = () => {
  const renderItem = ({ item }) => {
    return item.type === 'image' ? (
      <ImageGallery uri={item.uri} />
    ) : (
      <VideoPlayer uri={item.uri} />
    );
  };

  return (
    <FlatList
      data={mediaData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.gallery}
    />
  );
};

const styles = StyleSheet.create({
  gallery: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default MediaGallery;
