import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FoodDetailsScreen from '../../screens/Home/foodDetails/FoodDetailsScreen';
import FavoriteScreen from '../../screens/Home/FavoriteScreen';

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RestaurantsPage" component={FavoriteScreen} />
      <Stack.Screen
        name="FoodDetails"
        component={FoodDetailsScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
