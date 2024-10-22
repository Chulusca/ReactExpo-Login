import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import ButtonGradient from "../components/ButtonGradient";  
import { AuthContext } from '../context/AuthContext';

export default function DetalleEvento(){
    const { user, signOut } = useContext(AuthContext);
    const [event, setEvent] = useState();
    const route = useRoute();
    const { id_event } = route.params;

    const fetchEvents = async () => {
        
    };

    return (
        <View style={styles.container}>
          <Text style = {styles.title}>Evento id {id_event}</Text>
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
  