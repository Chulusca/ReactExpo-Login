import React from "react";
import { StyleSheet,Text, View, TextInput, Dimensions, Image, TouchableOpacity, Alert} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

export default function ButtonGradient({ title, email, password}){

    const handleButtonClick = () => {
        if(email && password){
            Alert.alert(
                title,
                `${email} logeado correctamente`,
                [
                  { text: 'OK', onPress: () => console.log(email) }
                ],
                { cancelable: false }
              );
        }else{
            Alert.alert(
                `Bobo`,
                `Llena tus datos ridiculo dale.`,
                [
                  { text: 'OK', onPress: () => console.log("Se intento logear un bobi") }
                ],
                { cancelable: false }
              );
        }
        // Aquí puedes realizar la navegación o acción que desees al hacer clic en el botón
      };

    return(
        <TouchableOpacity onPress={handleButtonClick} style={styles.container}>
            <LinearGradient
                colors={['#DD2ABF', '#5B183E',]}
                start={{x: 1, y:0}}
                end={{x:0, y:1}}
                style={styles.button}
                >
                <Text style={styles.subTitlePequeño}>Sing In</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    subTitlePequeño: {
      fontSize: 15,
      color: '#fff',
      fontWeight: 'bold'
    },
    button:{
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        width: 200,
        margin: 15,
        alignItems: 'center',
    }
  });