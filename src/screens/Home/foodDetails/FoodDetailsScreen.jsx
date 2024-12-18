import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/Header';
import {Bold, Regular} from '../../../constants/fonts';
import ShowCategory from '../../../components/ShowCategory';
import {categories, foodItems} from '../../../config/data';
import {Colors} from '../../../constants/colors';
import ItemSlider from '../../../components/ItemSlider';
import {useNavigation} from '@react-navigation/native';

export default function FoodDetailsScreen(props) {
  const {description, image, name, price, rating} = props.route.params.product;
  const {navigate} = useNavigation();
  const singlePage = data => {
    navigate('Discovery', {
      screen: 'FoodDetails',
      params: {product: data},
    });
    // navigate('FoodDetails', {product: data});
  };

  const buynowhandeler = () => {
    navigate('Profile', {
      screen: 'Order',
      params: {product : props.route.params.product},
    });
  };
  return (
    <ScrollView style={[styles.container]}>
      <View>
        <View>
          <Image
            source={{uri: image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 10,
          }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Text style={{fontFamily: Bold, fontSize: 30}}>{name}</Text>
          <Text style={{fontFamily: Regular, fontSize: 12}}>{description}</Text>
          <Text style={{fontFamily: Regular, fontSize: 12}}>
            <Icon name="star" size={20} color="#fe8800" />
            {rating}
          </Text>

          <Text
            style={{fontFamily: Bold, fontSize: 20, color: Colors.orangemain}}>
            $ {price}
          </Text>

          <TouchableOpacity
            onPress={buynowhandeler}
            style={{
              width: '100%',
              alignItems: 'center',
              alignSelf: 'center',
              height: 45,
              borderRadius: 20,
              marginBottom: 10,
              backgroundColor: Colors.orangemain,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: Bold,
                color: 'white',
                fontSize: 25,
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>

          <ItemSlider
            data={foodItems}
            Positionhorizontal={false}
            action={singlePage}
          />

          <ShowCategory data={categories} isHorizontal={false} />
        </View>
      </View>
      <View style={{position: 'absolute', top: 10}}>
        <Header />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: 250,
    backgroundColor: '#ffe7cc',
  },
});
