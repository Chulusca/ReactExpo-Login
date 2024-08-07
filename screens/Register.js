import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import SvgTop from '../components/Svg';
import ButtonGradient from "../components/ButtonGradient";  

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  return (
    <View style={styles.container}>
      <SvgTop />
      <Text style={styles.title}>Hola</Text>
      <Text style={styles.subTitle}>Registrate!</Text>

      <TextInput
        style={styles.input}
        placeholder="thiago@email.com"
        placeholderTextColor={'lightgrey'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="nombre"
        placeholderTextColor={'lightgrey'}
        value={password}
        onChangeText={setNombre}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="apellido"
        placeholderTextColor={'lightgrey'}
        value={password}
        onChangeText={setApellido}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="contraseña"
        placeholderTextColor={'lightgrey'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
      <Text style={styles.subTitlePequeño}>Olvidaste tu contraseña?</Text>
      <ButtonGradient title='Succesful' email={email} password={password} text={'Entrar'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    color: '#5B183E',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#999',
  },
  subTitlePequeño: {
    fontSize: 15,
    color: '#999',
    marginTop: 20,
  },
  input: {
    borderWidth: 0.3,
    borderColor: 'lightgrey',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 8,
    margin: 10,
    width: '80%',
    height: 50,
    paddingStart: 30,
  },
});