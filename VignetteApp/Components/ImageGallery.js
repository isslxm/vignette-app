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
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default ImageGallery;
