import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import DetalleEvento from '../screens/DetalleEvento';

const Stack = createStackNavigator();

export default function Navigation() {
  const { user } = useContext(AuthContext);

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
        {user.username ? (
          <>
            <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
            <Stack.Screen name="DetalleEvento" component={DetalleEvento} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}