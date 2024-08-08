import React from 'react';
import { AuthProvider } from './context/AuthContext'; // Asegúrate de la ruta correcta
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
