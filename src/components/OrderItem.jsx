import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {foodItems} from '../config/data';
import {Bold, Regular} from '../constants/fonts';
import {Colors} from '../constants/colors';

export default function OrderItem() {
  return (
    <View style={styles.container}>
      {/* image container */}
      <View>
        <Image
          source={{uri: foodItems[0].image}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      {/* 2nd part */}
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.nametext}>{foodItems[0].name}</Text>
          <Text style={styles.packingtext}>+ Packing fee</Text>
          <Text style={styles.packingtext}>+ chess</Text>
        </View>

        <View style={styles.pricesection}>
          <Text style={styles.pricetext}>$ {foodItems[0].price}</Text>
        </View>
      </View>
      {/* last part */}
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>-</Text>
        </TouchableOpacity>

        <Text style={styles.extratext}>1</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 10,
    height: 135,
  },
  image: {
    borderRadius: 10,
    width: 125,
    height: 135,
  },
  nametext: {
    fontFamily: Bold,
    fontSize: 15,
  },
  packingtext: {
    fontFamily: Regular,
    fontSize: 13,
  },
  pricesection: {
    justifyContent: 'flex-end',
  },
  pricetext: {
    color: Colors.orangemain,
    fontFamily: Bold,
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fed8cc',
    alignItems: 'center',
    borderRadius: 10,
    gap: 3,
  },
  btn: {
    width: 30,
    height: 15,
    backgroundColor: Colors.orangemain,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  btntext: {
    textAlign: 'center',
    fontFamily: Bold,
    fontSize: 10,
    alignSelf: 'center',
  },

  extratext: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Regular,
  },
});
