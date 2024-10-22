// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MediaGallery from '../Components/MediaGallery';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Media Gallery</Text>
      <MediaGallery />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
