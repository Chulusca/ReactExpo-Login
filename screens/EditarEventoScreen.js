import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Editar Evento Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  }
});
