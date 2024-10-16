import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import NuevoEventoScreen from '../screens/NuevoEvento';
import EditarEventoScreen from '../screens/EditarEventoScreen'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'NuevoEvento') {
            iconName = 'add-circle';
          } else if (route.name === 'EditarEventos') {
            iconName = 'create-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [
          {
            display: 'flex'
          },
          null
        ]
      })}
    >
      <Tab.Screen name="NuevoEvento" component={NuevoEventoScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="EditarEventos" component={EditarEventoScreen}/>
    </Tab.Navigator>
  );
}