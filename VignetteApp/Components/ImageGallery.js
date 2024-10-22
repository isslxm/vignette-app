// components/ImageGallery.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageGallery = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={uri} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default ImageGallery;
