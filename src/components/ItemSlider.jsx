import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {foodItems} from '../config/data';
import {FlashList} from '@shopify/flash-list';
import Star from 'react-native-vector-icons/AntDesign';
import Time from 'react-native-vector-icons/MaterialIcons';
import Car from 'react-native-vector-icons/MaterialCommunityIcons';
export default function ItemSlider() {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image
        source={{uri: item.image}}
        width={100}
        height={100}
        resizeMode="cover"
      />
      <Text style={styles.text}>{item.name}</Text>
      <Text style={{fontSize: 8}}>{item.description.substring(0, 60)} </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Star name="star" size={10} />
        <Time name="alarm" size={10} />
        <Car name="truck-delivery" size={10} />
      </View>
    </View>
  );
  return (
    <View>
      <FlashList
        horizontal
        data={foodItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        estimatedItemSize={200}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
});
