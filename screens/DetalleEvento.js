import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { EventsContext } from '../context/EventsContext';

export default function DetalleEvento() {
    const { user, signOut } = useContext(AuthContext);
    const { events } = useContext(EventsContext);
    const route = useRoute();
    const { id_event } = route.params;

    const event = events.find(event => event.id === id_event);

    if (!event) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Evento no encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{event.name}</Text>
                <Text style={styles.description}>{event.description}</Text>
                <Text style={styles.detail}>Creador: {event.creator_user.first_name} {event.creator_user.last_name}</Text>
                <Text style={styles.detail}>Fecha de inicio: {new Date(event.start_date).toLocaleDateString()}</Text>
                <Text style={styles.detail}>Duración: {event.duration_in_minutes} minutos</Text>
                <Text style={styles.detail}>Ubicación: {event.event_location.full_address}</Text>
                <Text style={styles.price}>Precio: ${event.price}</Text>
                <Text style={styles.detail}>Capacidad máxima: {event.max_capacity}</Text>
                <Text style={styles.detail}>Máxima asistencia: {event.max_assistance}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    scrollView: {
        marginVertical: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333333',
    },
    description: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 20,
        color: '#666666',
    },
    detail: {
        fontSize: 16,
        marginBottom: 8,
        color: '#444444',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e91e63',
        marginBottom: 20,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});
