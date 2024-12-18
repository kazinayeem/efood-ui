import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Root Navigator combines all flows
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './src/navigation/navigators/AuthNavigator';
import MainNavigator from './src/navigation/navigators/MainNavigator';
import OrderNavigator from './src/navigation/navigators/OrderNavigator';
import {AppContext, AppProvider} from './src/context/AppContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </AppProvider>
  );
}

const RootNavigator = () => {
  const {auth} = useContext(AppContext);

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {auth ? (
        <>
          <RootStack.Screen name="Main" component={MainNavigator} />
          <RootStack.Screen name="OrderFlow" component={OrderNavigator} />
        </>
      ) : (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};
