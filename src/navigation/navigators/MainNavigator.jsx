/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchPageScreen from '../../screens/Home/SearchPageScreen';
import FavoriteScreen from '../../screens/Home/FavoriteScreen';
import DiscoveryScreen from '../../screens/Home/DiscoveryScreen';
import FoodDetailsScreen from '../../screens/Home/foodDetails/FoodDetailsScreen';
import Resturantscreen from '../../screens/Home/resturent/Resturantscreen';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../constants/colors';
import OrderNavigator from './OrderNavigator';

// sd
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Tab.Navigator
    // initialRouteName={'Profile'}
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#F8F8F8',
        height: 60,
        borderTopWidth: 0,
        elevation: 10,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 20,
        bottom: 10,
      },
      tabBarActiveTintColor: '#FF4500', // Active item color
      tabBarInactiveTintColor: '#333', // Inactive item color
    }}>
    <Tab.Screen
      name="Discovery"
      component={DiscoveryStack}
      options={({navigation, route}) => ({
        tabBarIcon: ({focused}) => {
          return (
            <Icon1
              name="compass"
              size={20}
              color={focused ? Colors.orangemain : 'black'}
            />
          );
        },
      })}
    />
    <Tab.Screen
      name="Restaurants"
      component={RestaurantsStack}
      options={({navigation, route}) => ({
        tabBarIcon: ({focused}) => {
          return (
            <Icon2
              name="restaurant"
              size={20}
              color={focused ? Colors.orangemain : 'black'}
            />
          );
        },
      })}
    />
    <Tab.Screen
      name="Search"
      component={SearchPageScreen}
      options={({navigation, route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          return (
            <Icon
              name="search"
              size={20}
              color={focused ? Colors.orangemain : 'black'}
            />
          );
        },
      })}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={({navigation, route}) => ({
        tabBarIcon: ({focused}) => {
          return (
            <Icon
              name="favorite"
              size={20}
              color={focused ? Colors.orangemain : 'black'}
            />
          );
        },
      })}
    />
    <Tab.Screen
      name="Profile"
      component={OrderNavigator}
      options={({navigation, route}) => ({
        tabBarStyle: {display: 'none'},
        headerShown: true,
        headerTitle: '',
        headerTransparent: true,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: '#7c7c81',
              marginLeft: 15,
              width: 35,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
            }}>
            <Icon3 name="arrow-left" size={22} color={'white'} />
          </TouchableOpacity>
        ),
        tabBarIcon: ({focused}) => {
          return (
            <Icon3
              name="user"
              size={20}
              color={focused ? Colors.orangemain : 'black'}
            />
          );
        },
      })}
    />
  </Tab.Navigator>
);

const DiscoveryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
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
        name="DiscoveryPage"
        component={DiscoveryScreen}
      />
      <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
    </Stack.Navigator>
  );
};

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
      <Stack.Screen name="Restaurant" component={Resturantscreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
