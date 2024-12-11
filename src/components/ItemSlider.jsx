import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import Star from 'react-native-vector-icons/AntDesign';
import Time from 'react-native-vector-icons/MaterialIcons';
import Car from 'react-native-vector-icons/MaterialCommunityIcons';
import {Bold, Regular} from '../constants/fonts';

const COLORS = {
  orange: '#fe8800',
  background: '#f9f9f9',
  text: '#333',
};

const generateRandomDiscount = () =>
  `${Math.round(Math.random() * 15)}% off delivery`;

function ItemSlider({w, h, data, discount}) {
  const renderItem = ({item}) => (
    <View style={[styles.itemContainer]}>
      {/* Image and Discount Badge */}
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: item.image}}
          style={styles.itemImage}
          resizeMode="cover"
        />
        {discount && (
          <TouchableOpacity style={styles.discountBadge}>
            <Text style={styles.discountText}>{generateRandomDiscount()}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Item Info */}
      <Text style={[styles.text, styles.itemName]}>{item.name}</Text>
      <Text style={[styles.text, styles.itemDescription]}>
        {item.description.substring(0, 40)}...
      </Text>

      {/* Item Details */}
      <View style={styles.itemDetails}>
        <View style={styles.detailRow}>
          <Car name="truck-delivery" size={15} color={COLORS.orange} />
          <Text style={styles.detailText}>${item.price}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailText}>40-50min</Text>
          <Time name="alarm" size={15} color={COLORS.orange} />
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailText}>{item.rating}</Text>
          <Star name="star" size={15} color={COLORS.orange} />
        </View>
      </View>
    </View>
  ); 

  return (
    <View style={[styles.sliderContainer]}>
      <FlashList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={200}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    height: 210,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: COLORS.background,
    width: '95%',
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 10,
  },
  imageWrapper: {
    width: '100%',
  },
  itemImage: {
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    right: 5,
    bottom: 10,
    backgroundColor: COLORS.orange,
    borderRadius: 5,
    padding: 3,
  },
  discountText: {
    fontFamily: Regular,
    fontSize: 12,
    color: '#fff',
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 15,
  },
  itemName: {
    fontFamily: Bold,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  itemDescription: {
    fontFamily: Regular,
    fontSize: 10,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    gap: 10,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontFamily: Regular,
    fontSize: 12,
    color: COLORS.text,
  },
});

export default ItemSlider;
