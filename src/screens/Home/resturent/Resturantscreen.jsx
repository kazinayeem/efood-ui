import {Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ShowCategory from '../../../components/ShowCategory';
import {categories, foodItems} from '../../../config/data';
import ItemSlider from '../../../components/ItemSlider';
import {Bold} from '../../../constants/fonts';
import {useNavigation} from '@react-navigation/native';

export default function Resturantscreen() {
  const category = categories;
  const {navigate} = useNavigation();
  const singlePage = data => {
    navigate('Discovery', {
      screen: 'FoodDetails',
      params: {product: data},
    });

    // navigate('FoodDetails', {product: data});
  };
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontFamily: Bold,
          color: 'black',
          paddingHorizontal: 10,
          marginBottom: 10,
        }}>
        Restaurants
      </Text>
      <ShowCategory data={category} />
      <Text
        style={{
          fontSize: 25,
          fontFamily: Bold,
          color: 'black',
          paddingHorizontal: 10,
          marginBottom: 10,
        }}>
        All Restaurants
      </Text>
      <ItemSlider
        Positionhorizontal={false}
        data={foodItems}
        discount={true}
        action={singlePage}
      />
      {/* <AllRestaurant data={foodItems} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
