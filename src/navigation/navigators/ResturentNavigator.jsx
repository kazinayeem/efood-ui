/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Resturantscreen from '../../screens/Home/resturent/Resturantscreen';
import {Text, View} from 'react-native';
import FoodDetailsScreen from '../../screens/Home/foodDetails/FoodDetailsScreen';

const Stack = createNativeStackNavigator();

const RestaurantsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RestaurantsPage"
        options={({route}) => ({
          title: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Home,</Text>
              <Text style={{fontWeight: 'bold'}}>Jl. Soekarno Hatte 15A</Text>
            </View>
          ),
        })}
        component={Resturantscreen}
      />
      <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RestaurantsStack;
