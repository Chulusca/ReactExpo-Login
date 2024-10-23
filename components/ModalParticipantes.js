import React from 'react';
import { View, Text, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';

export default function ModalParticipantes({ visible, participants, onClose }) {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => onClose(false)}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    {participants.length === 0 ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No hay participantes registrados.</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={participants}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.participantContainer}>
                                    <Text style={styles.participantName}>
                                        {item.first_name} {item.last_name}
                                    </Text>
                                    <Text style={styles.participantUsername}>
                                        {item.username}
                                    </Text>
                                </View>
                            )}
                        />
                    )}
                    <TouchableOpacity onPress={() => onClose(false)} style={styles.closeButtonContainer}>
                        <Text style={styles.closeButton}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '70%', // Ancho reducido
        maxHeight: '70%', // Altura máxima
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
    },
    participantContainer: {
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    participantName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    participantUsername: {
        fontSize: 14,
        color: '#555',
    },
    closeButtonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    closeButton: {
        fontSize: 16,
        color: '#e91e63',
    },
});
