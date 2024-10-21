import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import ButtonGradient from "../components/ButtonGradient";  
import { AuthContext } from '../context/AuthContext';

export default function DetalleEvento(){
    const { user, signOut } = useContext(AuthContext);
    const [event, setEvent] = useState();
    const route = useRoute();
    const { id_event } = route.params;

    const fetchEvents = async () => {
        
    };
}