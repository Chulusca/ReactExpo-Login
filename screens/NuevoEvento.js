import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NuevoEvento() {
  return (
    <View style={styles.container}>
      <Text>Nuevo Evento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});