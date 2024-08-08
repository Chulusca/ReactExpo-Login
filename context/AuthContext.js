import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: ''
  })

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUser();
  }, []);

  const signIn = async (username_, password_) => {
    const authenticatedUser = {
        first_name: 'example',
        last_name: 'example',
        username: username_,
        password: password_
    }
    setUser(authenticatedUser);
    await AsyncStorage.setItem('user', JSON.stringify(authenticatedUser));
  };

  const signOut = async () => {
    setUser({
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    });
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};