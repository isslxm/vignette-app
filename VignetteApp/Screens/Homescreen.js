import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Добро пожаловать в VignetteApp!</Text>
      <Button title="Перейти к галерее" onPress={() => navigation.navigate('Gallery')} />
    </View>
  );
};

export default HomeScreen;
