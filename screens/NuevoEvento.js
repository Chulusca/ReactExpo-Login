import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView, Modal, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AuthContext } from '../context/AuthContext';
import { getCategorias, getLocations, createEvent } from '../services/Events';

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
    enabled_for_enrollment: false,
    max_assistance: ''
  });

  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
    if(form.name && form.description && form.id_event_category && form.id_event_location && form.start_date && form.duration_in_minutes && form.price && form.enabled_for_enrollment && form.max_assistance){
      setModalVisible(true);
    }
    else{
      Alert.alert('Completar el formulario', 'Faltan datos obligatorios.');
    }
    
  };

  const confirmEvent = async () => { 
    const response = await createEvent(form, token);
    if(response.status == 201){
      Alert.alert('El evento ha sido agregado correctamente.', response.message);
    }
    else{
      Alert.alert('Error al crear un evento', response.message);
    }
    
    setModalVisible(false); 
  };

  const cancelEvent = () => {
    setModalVisible(false);
  };

  const getCategoryName = (id) => {
    const category = categories.find(cat => cat.id == id);
    return category ? category.name : 'No disponible';
  };

  const getLocationName = (id) => {
    const location = locations.find(loc => loc.id == id);
    return location ? location.name : 'No disponible';
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
          placeholder="Máxima asistencia"
          value={form.max_assistance}
          onChangeText={(value) => handleChange('max_assistance', value)}
          keyboardType="numeric"
        />
        <View style={styles.switchContainer}>
          <Text style={styles.header}>Habilitado para inscripción</Text>
          <Switch
            value={form.enabled_for_enrollment}
            onValueChange={(value) => handleChange('enabled_for_enrollment', value)}
          />
        </View>
        
        <Button title="Agregar Evento" onPress={handleSubmit} />

        {/* Modal para validar la información */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Confirma tu evento</Text>
              <Text>Nombre: {form.name}</Text>
              <Text>Descripción: {form.description}</Text>
              <Text>Categoría: {getCategoryName(form.id_event_category)}</Text>
              <Text>Ubicación: {getLocationName(form.id_event_location)}</Text>
              <Text>Fecha de inicio: {form.start_date}</Text>
              <Text>Duración: {form.duration_in_minutes} minutos</Text>
              <Text>Precio: ${form.price}</Text>
              <Text>Inscripción habilitada: {form.enabled_for_enrollment ? 'Sí' : 'No'}</Text>
              <Text>Máxima asistencia: {form.max_assistance}</Text>
              <View style={styles.modalButtons}>
                <Button title="Cancelar" onPress={cancelEvent} />
                <Button title="Confirmar" onPress={confirmEvent} />
              </View>
            </View>
          </View>
        </Modal>

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
  header: {
    fontSize: 16,
    fontWeight: "bold"
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
});
