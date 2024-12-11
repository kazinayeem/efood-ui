import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import Slider from '../../components/Slider';
import FireIcon from 'react-native-vector-icons/Fontisto';
import HandClap from 'react-native-vector-icons/MaterialCommunityIcons';
import {SemiBold} from '../../constants/fonts';
import ItemSlider from '../../components/ItemSlider';
import {foodItems} from '../../config/data';

export default function DiscoveryScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <Slider />
      <View style={styles.cardcontainer}>
        {/* Fastest Delivery */}
        <View style={styles.cardheader}>
          <Text>
            Fastest Delivery
            <FireIcon name="fire" size={15} color="#AA4203" />
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#fed8cc',
              width: 70,
              height: 30,
              alignItems: 'center',
              borderRadius: 15,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#f8440e',
                textAlign: 'center',
                fontFamily: SemiBold,
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: 0, height: 0, marginBottom: 15}} />
        <ItemSlider data={foodItems} discount={true}  />

        {/* end */}

        {/* popular items */}
        <View style={styles.cardheader}>
          <Text>
            Popular Items
            <HandClap name="hand-clap" size={15} color="#fbca46" />
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#fed8cc',
              width: 70,
              height: 30,
              alignItems: 'center',
              borderRadius: 15,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#f8440e',
                textAlign: 'center',
                fontFamily: SemiBold,
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ItemSlider data={foodItems} discount={false} />
      {/* end */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  cardcontainer: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 15,
  },
  cardheader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 0,
  },
});
