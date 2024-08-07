import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SvgTop from '../components/Svg';
import ButtonGradient from "../components/ButtonGradient";  

export default function RegisterScreen() {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const navigation = useNavigation();

  const handleHasAccount = () => {
    navigation.navigate('Login');
  } 

  const handleRegister = () => {
    if(email && password && nombre && apellido){
      Alert.alert(
          'Success',
          `${email} registrado correctamente`,
          [
            { text: 'OK', onPress: () => console.log(email) }
          ],
          { cancelable: false }
        );
        navigation.navigate('Home', { nombre, apellido, email });
    }else{
      Alert.alert(
          `Error`,
          `Llena tus datos, por favor.`,
          [
            { text: 'OK', onPress: () => console.log("Se intentó registrar sin completar los datos") }
          ],
          { cancelable: false }
        );
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
    >
      <View style={styles.innerContainer}>
        <SvgTop />
        <Text style={styles.title}>Hola</Text>
        <Text style={styles.subTitle}>¡Regístrate!</Text>

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
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="apellido"
          placeholderTextColor={'lightgrey'}
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.input}
          placeholder="contraseña"
          placeholderTextColor={'lightgrey'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        
        <Text style={styles.subTitlePequeño} onPress={handleHasAccount}>¿Ya tienes una cuenta?</Text>
        <ButtonGradient funcion={handleRegister} text={'Entrar'} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  innerContainer: {
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
    backgroundColor: '#f6f5f5',
    borderRadius: 25,
    padding: 8,
    margin: 10,
    width: '80%',
    height: 50,
    paddingStart: 30,
  },
});
