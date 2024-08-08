import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SvgTop from '../components/Svg';
import ButtonGradient from "../components/ButtonGradient";     
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); 
  const { signIn } = useContext(AuthContext);

  const handleNoAccount = () => {
    navigation.navigate('Register');
  }

  const handleLogin = async () => { 
    if (email && password) {
      try {
        await signIn(email, password);
        Alert.alert(
          'Success',
          `${email} logeado correctamente`, 
          [{ text: 'OK', onPress: () => console.log(email) }],
          { cancelable: false }
        );
      } catch (error) {
        console.log(error);
        Alert.alert(
          'Error',
          `Error al iniciar sesión.`,
          [{ text: 'OK', onPress: () => console.log('Error de inicio de sesión') }],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        'Error',
        'Llena tus datos.',
        [{ text: 'OK', onPress: () => console.log('Se intentó loguear con datos incompletos') }],
        { cancelable: false }
      );
    }
  };

  return (
    <View style={styles.container}>
      <SvgTop />
      <Text style={styles.title}>Hola</Text>
      <Text style={styles.subTitle}>Logueate en tu cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="thiago@email.com"
        placeholderTextColor={'lightgrey'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="contraseña"
        placeholderTextColor={'lightgrey'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Text style={styles.subTitlePequeño} onPress={handleNoAccount}>No tenes cuenta?</Text>
      <ButtonGradient text={'Entrar'} funcion={handleLogin} />
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
    backgroundColor: '#f6f5f5',
    borderRadius: 20,
    padding: 8,
    margin: 10,
    width: '80%',
    height: 50,
    paddingStart: 30,
  },
});