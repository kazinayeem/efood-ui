import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Root Navigator combines all flows
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './src/navigation/navigators/AuthNavigator';
import MainNavigator from './src/navigation/navigators/MainNavigator';
import OrderNavigator from './src/navigation/navigators/OrderNavigator';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootNavigator = () => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="Auth" component={AuthNavigator} />
    <RootStack.Screen name="Main" component={MainNavigator} />
    <RootStack.Screen name="OrderFlow" component={OrderNavigator} />
  </RootStack.Navigator>
);
