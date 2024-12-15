import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screens/Auth/SplashScreen';
import WelcomeScreen from '../../screens/Auth/WelcomeScreen';
import LoginScreen from '../../screens/Auth/LoginScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import ResetPasswordScreen from '../../screens/Auth/ResetPasswordScreen';
import VerificationCodeScreen from '../../screens/Auth/VerificationCodeScreen';
import MainNavigator from './MainNavigator';

const AuthStack = createNativeStackNavigator();
const dev = __DEV__;

const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'slide_from_left',
    }}
    initialRouteName={dev ? 'MainNavigator' : 'SplashScreen'}>
    <AuthStack.Screen name="Splash" component={SplashScreen} />
    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    <AuthStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    <AuthStack.Screen
      name="VerificationCode"
      component={VerificationCodeScreen}
    />
    <AuthStack.Screen name="MainNavigator" component={MainNavigator} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
