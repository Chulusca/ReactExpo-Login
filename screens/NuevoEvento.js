import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../context/AuthContext';
import { getCategorias, getLocations } from '../services/Events';

export default function NuevoEvento() {
  const { token } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: '',
    description: '',
    id_event_category: '',
    id_event_location: '',
    start_date: '',
    duration_in_minutes: '',
    price: '',
    enabled_for_enrollment: '',
    max_assistance: ''
  });

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategorias();
        const locationsData = await getLocations(token);
        setCategories(categoriesData);
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching categories:', error);
        Alert.alert('Error', 'No se pudieron cargar las categorías.');
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    Alert.alert('Formulario enviado', JSON.stringify(form));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Nuevo Evento</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del evento"
          value={form.name}
          onChangeText={(value) => handleChange('name', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={form.description}
          onChangeText={(value) => handleChange('description', value)}
        />
        <Picker
          selectedValue={form.id_event_category}
          style={styles.picker}
          onValueChange={(value) => handleChange('id_event_category', value)}
        >
          {categories.map((category) => (
            <Picker.Item key={category.id} label={category.name} value={category.id} />
          ))}
        </Picker>
        <Picker
          selectedValue={form.id_event_location}
          style={styles.picker}
          onValueChange={(value) => handleChange('id_event_location', value)}
        >
          {locations.map((location) => (
            <Picker.Item key={location.id} label={location.name} value={location.id} />
          ))}
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Fecha de inicio (YYYY-MM-DD HH:MM:SS)"
          value={form.start_date}
          onChangeText={(value) => handleChange('start_date', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Duración en minutos"
          value={form.duration_in_minutes}
          onChangeText={(value) => handleChange('duration_in_minutes', value)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Precio"
          value={form.price}
          onChangeText={(value) => handleChange('price', value)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Habilitado para inscripción (1 o 0)"
          value={form.enabled_for_enrollment}
          onChangeText={(value) => handleChange('enabled_for_enrollment', value)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Máxima asistencia"
          value={form.max_assistance}
          onChangeText={(value) => handleChange('max_assistance', value)}
          keyboardType="numeric"
        />
        <Button title="Agregar Evento" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
  },
});
