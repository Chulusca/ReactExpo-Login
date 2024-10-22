import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './context/AuthContext'; // Asegúrate de la ruta correcta
import { EventsProvider } from './context/EventsContext'; // Importa el nuevo contexto
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <EventsProvider> 
        <StatusBar barStyle="auto" />
        <Navigation />
      </EventsProvider>
    </AuthProvider>
  );
}
