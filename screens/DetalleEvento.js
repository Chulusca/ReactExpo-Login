import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { EventsContext } from '../context/EventsContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DetalleEvento() {
    const { user } = useContext(AuthContext);
    const { events } = useContext(EventsContext);
    const route = useRoute();
    const { id_event } = route.params;

    const [participants, setParticipants] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const event = events.find(event => event.id === id_event);
    const currentDate = new Date();

    const fetchParticipants = async () => {
        
    };
    
    useEffect(() => {
        fetchParticipants();
      }, []);

    if (!event) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Evento no encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.title}>{event.name}</Text>
                    <Text style={styles.description}>{event.description}</Text>
                    <Text style={styles.detail}>Creador: {event.creator_user.first_name} {event.creator_user.last_name}</Text>
                    <Text style={styles.detail}>Fecha de inicio: {new Date(event.start_date).toLocaleDateString()}</Text>
                    <Text style={styles.detail}>Duración: {event.duration_in_minutes} minutos</Text>
                    <Text style={styles.detail}>Ubicación: {event.event_location.full_address}</Text>
                    <Text style={styles.detail}>Capacidad máxima: {event.max_capacity}</Text>
                    <Text style={styles.detail}>Máxima asistencia: {event.max_assistance}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>Precio: ${event.price}</Text>
                        {new Date(event.start_date) > currentDate ? (
                            <Icon name="edit" size={24} color="#e91e63" style={styles.icon} />
                        ) : (
                            <Icon name="people" size={24} color="#3f51b5" style={styles.icon} />
                        )}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    scrollView: {
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 20,
        color: '#555',
        textAlign: 'center',
    },
    detail: {
        fontSize: 15,
        marginBottom: 10,
        color: '#666',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },

    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    icon: {
        marginLeft: 10,
    },
});
