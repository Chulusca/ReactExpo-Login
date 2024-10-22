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
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Nuevo Evento') {
            iconName = 'add-circle';
          } else if (route.name === 'Tus Eventos') {
            iconName = 'create-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: [
          {
            display: 'flex'
          },
          null
        ]
      })}
    >
      <Tab.Screen name="Nuevo Evento" component={NuevoEventoScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tus Eventos" component={EditarEventoScreen}/>
    </Tab.Navigator>
  );
}