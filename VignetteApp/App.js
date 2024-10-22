import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MediaGallery from './Components/MediaGallery'; // Убедитесь, что путь корректен

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MediaGallery />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Цвет фона приложения
    paddingTop: StatusBar.currentHeight, // Чтобы контент не находился под статус-баром
  },
});
