import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPageScreen from '../../screens/Home/SearchPageScreen';
import FavoriteScreen from '../../screens/Home/FavoriteScreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import DiscoveryScreen from '../../screens/Home/DiscoveryScreen';
import FoodDetailsScreen from '../../screens/Home/foodDetails/FoodDetailsScreen';
import Resturantscreen from '../../screens/Home/resturent/Resturantscreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Discovery" component={DiscoveryStack} />
        <Tab.Screen name="Restaurants" component={RestaurantsStack} />
        <Tab.Screen name="Search" component={SearchPageScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);

const DiscoveryStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="DiscoveryPage" component={DiscoveryScreen} />
        <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
    </Stack.Navigator>
);

const RestaurantsStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="RestaurantsPage" component={Resturantscreen} />
        <Stack.Screen name="Restaurant" component={Resturantscreen} />
    </Stack.Navigator>
);

export default MainNavigator;
