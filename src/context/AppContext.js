import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state while checking storage

  console.log(loading);

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const storedAuth = await AsyncStorage.getItem('auth');
        if (storedAuth === 'true') {
          setAuth(true);
        }
      } catch (error) {
        console.error('Failed to load auth state:', error);
      } finally {
        setLoading(false); // Stop loading once state is set
      }
    };

    loadAuthState();
  }, []);

  // Function to log in
  const logIn = async () => {
    console.log('login');

    try {
      await AsyncStorage.setItem('auth', 'true'); // Save auth state
      setAuth(true);
    } catch (error) {
      console.error('Failed to save auth state:', error);
    }
  };

  // Function to log out
  const logOut = async () => {
    console.log('logout');
    try {
      await AsyncStorage.removeItem('auth'); // Remove auth state
      setAuth(false);
    } catch (error) {
      console.error('Failed to remove auth state:', error);
    }
  };

  return (
    <AppContext.Provider value={{auth, logIn, logOut}}>
      {children}
    </AppContext.Provider>
  );
};
