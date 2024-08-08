import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser, validateToken, registerUser} from '../services/Users'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
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
    let response = await loginUser(username_, password_);
    console.log(response.token);
    response = await validateToken(response.token);

    const authenticatedUser = {
      first_name: response.first_name,
      last_name: response.last_name,
      username: response.username,
      password: response.password
    }
    setUser(authenticatedUser);
    await AsyncStorage.setItem('user', JSON.stringify(authenticatedUser));
  };

  const register = async (username_, password_, first_name_, last_name_) => {
    const authenticatedUser = {
        first_name: first_name_,
        last_name: last_name_,
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
      signOut,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
};
