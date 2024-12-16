/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import DiscoveryScreen from '../../screens/Home/DiscoveryScreen';
import FoodDetailsScreen from '../../screens/Home/foodDetails/FoodDetailsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
const DiscoveryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => ({
          title: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Home,</Text>
              <Text style={{fontWeight: 'bold'}}>Jl. Soekarno Hatte 15A</Text>
            </View>
          ),
        })}
        name="DiscoveryPage"
        component={DiscoveryScreen}
      />
      <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
    </Stack.Navigator>
  );
};

export default DiscoveryStack;
