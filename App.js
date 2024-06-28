import React, { useState } from "react";
import { StatusBar} from "expo-status-bar";
import { StyleSheet,Text, View, TextInput, Dimensions, Image} from "react-native";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
import ButtonGradient from "./ButtonGradient";
const {width, height} = Dimensions.get('window');

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function SvgTop() {
    return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width} height={height  / 2} style={{ position: 'absolute', zIndex: -1 }}>
      <Defs>
        <LinearGradient id="a" x1={0} x2={1} y1={1} y2={0}>
          <Stop offset="0%" stopColor="rgba(248, 117, 55, 1)" />
          <Stop offset="100%" stopColor="rgba(195.875, 23.292, 163.965, 1)" />
        </LinearGradient>
      </Defs>
      <Path
        fill="none"
        stroke="url(#a)"
        d="M26-33.6c5.2 7 5.1 17.5 7 27.9 2 10.3 5.9 20.4 3.1 27.7-2.9 7.3-12.5 11.9-22.4 15.5-10 3.6-20.3 6.3-29.6 3.9s-17.6-9.8-20-18.5c-2.4-8.6 1.2-18.5 4.3-27.2 3.1-8.7 5.6-16.1 10.8-23.1 5.2-7 13-13.5 22.1-15 9.1-1.6 19.5 1.8 24.7 8.8Z"
        style={{
          transition: "all .3s ease 0s",
        }}
        transform="translate(50 50)"
      />
    </Svg>
    )
  }
  return (
    <View style={styles.container}>
      <SvgTop/>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subTitle}>Sing In to your account</Text>

      <TextInput 
        style={styles.input}
        placeholder="john@email.com"
        placeholderTextColor={'lightgrey'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={styles.input}
        placeholder="password"
        placeholderTextColor={'lightgrey'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Text style={styles.subTitlePequeño}>Forgot your Password?</Text>
      <ButtonGradient title='Succesful' email={email} password={password}/>
      <StatusBar style="auto"/>
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
    color: '#34434D',
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
