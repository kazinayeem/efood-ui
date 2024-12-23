/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchPageScreen from '../../screens/Home/SearchPageScreen';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../constants/colors';
import OrderNavigator from './OrderNavigator';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import RestaurantsStack from './ResturentNavigator';
import DiscoveryStack from './DiscoveryStack';
//import FavoriteNavigation from './FavoriteNavigation';
import FavoriteScreen from '../../screens/Home/FavoriteScreen';


// s
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const tabBarStyle = {
    backgroundColor: '#F8F8F8',
    height: 60,
    borderTopWidth: 0,
    elevation: 10,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
    bottom: 10,
  };
  const getTabBarStyle = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'DiscoveryPage';
    if (routeName === 'FoodDetails') {
      return {display: 'none'};
    }
    return tabBarStyle;
  };

  return (
    <Tab.Navigator
      //initialRouteName={'Discovery'}
      screenOptions={{
        headerShown: false,
        tabBarStyle,
        tabBarActiveTintColor: '#FF4500',
        tabBarInactiveTintColor: '#333',
      }}>
      <Tab.Screen
        name="Discovery"
        component={DiscoveryStack}
        options={({route}) => ({
          tabBarStyle: getTabBarStyle(route),
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
        options={({route}) => ({
          tabBarStyle: getTabBarStyle(route),
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
        options={({navigation}) => ({
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
        options={({route}) => ({
          tabBarStyle: getTabBarStyle(route),
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
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Profile', {
              screen: 'MainProfile',
            });
          },
        })}
        component={OrderNavigator}
        options={({navigation}) => ({
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
};

export default MainNavigator;
