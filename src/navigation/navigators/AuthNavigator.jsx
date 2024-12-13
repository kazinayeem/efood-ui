import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/Auth/SplashScreen';
import WelcomeScreen from '../../screens/Auth/WelcomeScreen';
import LoginScreen from '../../screens/Auth/LoginScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import ResetPasswordScreen from '../../screens/Auth/ResetPasswordScreen';
import VerificationCodeScreen from '../../screens/Auth/VerificationCodeScreen';
import MainNavigator from './MainNavigator';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: 'transparentModal',
      animation: 'fade',
    }}
    initialRouteName="Splash"
  >
    <AuthStack.Screen name="Splash" component={SplashScreen} />
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    <AuthStack.Screen
      name="VerificationCode"
      component={VerificationCodeScreen}
      options={{
        presentation: 'modal',        // Override to modal
        animation: 'slide_from_bottom', // Mimics iOS modal behavior
      }}
    />
    <AuthStack.Screen name="MainNavigator" component={MainNavigator} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
