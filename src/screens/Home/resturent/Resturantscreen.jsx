import {Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ShowCategory from '../../../components/ShowCategory';
import {categories, foodItems} from '../../../config/data';
import ItemSlider from '../../../components/ItemSlider';
import {Bold} from '../../../constants/fonts';

export default function Resturantscreen() {
  const category = categories;
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
        discount={false}
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
