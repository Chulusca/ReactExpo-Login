import React from "react";
import { StyleSheet,Text, TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

export default function ButtonGradient({text, funcion}){

    return(
        <TouchableOpacity onPress={funcion} style={styles.container}>
            <LinearGradient
                colors={['#DD2ABF', '#5B183E',]}
                start={{x: 1, y:0}}
                end={{x:0, y:1}}
                style={styles.button}
                >
                <Text style={styles.subTitlePequeño}>{text}</Text>
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