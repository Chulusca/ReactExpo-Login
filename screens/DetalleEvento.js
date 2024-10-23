import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity, Fla } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { EventsContext } from '../context/EventsContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getParticipants } from '../services/Events';
import ModalParticipantes from '../components/ModalParticipantes'; 

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
        const participantsData = await getParticipants(id_event);
        setParticipants(participantsData);
    };
    
    useEffect(() => {
        if (modalVisible) {
            fetchParticipants();
        }
    }, [modalVisible]);

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
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Icon name="people" size={24} color="#3f51b5" style={styles.icon} />
                            </TouchableOpacity> 
                        )}
                    </View>
                </ScrollView>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Modal>

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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        fontSize: 16,
        color: '#e91e63',
    },
});
