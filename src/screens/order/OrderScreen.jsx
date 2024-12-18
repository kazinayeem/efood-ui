import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/colors';
import {categories} from '../../config/data';
import {Bold, Regular} from '../../constants/fonts';
import OrderItem from '../../components/OrderItem';
import ShowCategory from '../../components/ShowCategory';
import {useNavigation} from '@react-navigation/native';

export default function OrderScreen(props) {
  const {id, image, name, price} = props.route.params.product;

  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      {/* cart */}
      {/* <OrderItem /> */}
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: 'black',
          marginTop: 5,
          marginBlock: 5,
        }}
      />
      <OrderItem id={id} name={name} image={image} price={price} key={id} />
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: 'black',
          marginTop: 5,
          marginBlock: 5,
        }}
      />
      <View style={styles.totalsection}>
        <Text style={styles.totaltext}>Total</Text>
        <Text style={styles.pricetext}>$ {price}</Text>
      </View>

      <Text>Recommendations</Text>

      <ShowCategory data={categories} header={false} />

      <TouchableOpacity
        style={styles.checkoutbtn}
        onPress={() => navigate('DeliveryMap')}>
        <Text style={styles.btntext}>Go To CheckOut</Text>
        <Text style={styles.btntext}>$ {price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
  totalsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pricetext: {
    fontFamily: Bold,
    color: Colors.orangemain,
    fontSize: 18,
  },
  totaltext: {
    fontFamily: Regular,
    fontSize: 17,
  },
  checkoutbtn: {
    position: 'absolute',
    bottom: 10,
    width: '95%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 25,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.orangemain,
  },

  btntext: {
    color: 'white',
    fontFamily: Regular,
  },
});
