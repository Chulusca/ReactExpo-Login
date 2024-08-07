import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';  
import RegisterScreen from '../screens/Register';
import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false,
          headerTitleStyle: {
            color: 'grey',
            fontWeight: 'bold',
            fontSize: 20,
          }, 
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
