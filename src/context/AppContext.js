import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state while checking storage

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

  const logIn = async () => {
    try {
      await AsyncStorage.setItem('auth', 'true'); // Save auth state
      setAuth(true);
    } catch (error) {
      console.error('Failed to save auth state:', error);
    }
  };

  // Function to log out
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('auth'); // Remove auth state
      setAuth(false);
    } catch (error) {
      console.error('Failed to remove auth state:', error);
    }
  };

  return (
    <AppContext.Provider value={{auth, logIn, logOut, loading}}>
      {children}
    </AppContext.Provider>
  );
};
