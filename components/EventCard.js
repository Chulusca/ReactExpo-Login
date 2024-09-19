// components/EventCard.js
import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import defaultImage from '../assets/movistarArena.jpg';

export default function EventCard({ event }) {
  return (
    <View style={styles.card}>
      <ImageBackground source={defaultImage} style={styles.image}>
        <View style={styles.body}>
          <Text style={styles.title}>{event.name}</Text>
          <Text style={styles.price}>${event.price}</Text>
          <Text style={styles.location}>{event.event_location.name}</Text>
        </View>
      </ImageBackground>
    </View>
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
    height: 250,
    justifyContent: 'flex-end',
  },
  body: {
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
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