// components/EventCard.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import defaultImage from '../assets/movistarArena.jpg';

export default function EventCard({ event, type }) {
  const id_event = event.id;
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('DetalleEvento', { id_event, fromScreen: type });
  };

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.card}>
      <ImageBackground source={defaultImage} style={styles.image}>
        <View style={styles.body}>
          <Text style={styles.title}>{event.name}</Text>
          <Text style={styles.price}>${event.price}</Text>
          <Text style={styles.location}>{event.event_location.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity >
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  body: {
    backgroundColor: 'rgba(100, 100, 100, 0.7)',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: '#fff',
  },
});