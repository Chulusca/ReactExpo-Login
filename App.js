import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './context/AuthContext'; // Asegúrate de la ruta correcta
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar barStyle="auto" />
      <Navigation />
    </AuthProvider>
  );
}
