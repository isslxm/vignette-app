// components/ProfileCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ imageUri, name, quote }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUri} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.quote}>{quote}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    backgroundColor: 'gray',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  quote: {
    marginTop: 5,
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default ProfileCard;
