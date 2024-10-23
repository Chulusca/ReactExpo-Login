import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { EventsContext } from '../context/EventsContext';
import EventCard from '../components/EventCard';

export default function EditarEvento() {
  const { user } = useContext(AuthContext);
  const { events, setEvents } = useContext(EventsContext);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.name}>
        Tus eventos {"\n"} 
        {`${user.first_name} ${user.last_name}`}
      </Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView
          style={styles.scrollView}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {events && events.length > 0 ? ( 
            events.map((event) => {
              if (event.creator_user.username !== user.username) { 
                return null; 
              }
              return <EventCard key={event.id} event={event} />;
            })
          ) : (
            <Text style={styles.text}>No hay eventos disponibles.</Text>
          )}

        </ScrollView>
      </View>
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
  card: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontWeight: 'bold'
  },
  scrollViewContent: {
    padding: 10,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  scrollContainer: {
    height: '10rem', 
    width: '100%',
  },
  
});
