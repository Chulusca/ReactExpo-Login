import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ModalParticipantes({ participants }) {
    if (!participants || participants.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No hay participantes registrados.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    emptyContainer: {
        flex: 1,
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
});
