import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard';

const profiles = [
  {
    id: '1',
    imageUri: require('../assets/images/photo3.jpg'),
    name: 'John Kannedy',
    quote: 'Quote 1',
  },
  {
    id: '2',
    imageUri: require('../assets/images/photo3.jpg'),
    name: 'Will Smith',
    quote: 'Quote 2',
  },
  {
    id: '3',
    imageUri: require('../assets/images/photo3.jpg'),
    name: 'Bob Johnson',
    quote: 'Quote 3',
  },
];

const ProfileCardCarousel = () => {
  return (
    <FlatList
      data={profiles}
      renderItem={({ item }) => (
        <ProfileCard
          imageUri={item.imageUri}
          name={item.name}
          quote={item.quote}
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={styles.carousel}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  carousel: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default ProfileCardCarousel;
