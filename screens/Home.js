import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ButtonGradient from "../components/ButtonGradient";  
import { AuthContext } from '../context/AuthContext';
import { EventsContext } from '../context/EventsContext';
import { getEvents } from '../services/Events';
import EventCard from '../components/EventCard';

export default function HomeScreen() {
  const { user, signOut } = useContext(AuthContext);
  const { events, setEvents } = useContext(EventsContext);

  const fetchEvents = async () => {
    const fetchedEvents = await getEvents();
    setEvents(fetchedEvents || []);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (user.username == '') {
    return (
      <View style={styles.container}>
        <Text>Error: No se recibieron los parámetros correctamente.</Text>
        <ButtonGradient text={'Sing Out'} funcion={signOut} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{`${user.first_name} ${user.last_name}`}</Text>
        <Text style={styles.email}>{user.username}</Text>
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
            events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <Text style={styles.text}>No hay eventos disponibles.</Text>
          )}

        </ScrollView>
      </View>
      <ButtonGradient text={'Sing Out'} funcion={signOut} />
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
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  scrollViewContent: {
    padding: 10,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  text: {
    padding: 10,
    fontSize: 18,
  },
  scrollContainer: {
    height: '10rem', 
    width: '100%',
  },
});
