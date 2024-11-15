import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const ImageGallery = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={uri} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageGallery;
