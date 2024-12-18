import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {BounceIn, BounceOut} from 'react-native-reanimated';
import {Colors} from '../../constants/colors';
import SearchInput from '../../components/SearchInput';
import ItemSlider from '../../components/ItemSlider';
import {categories, foodItems} from '../../config/data';
import ShowCategory from '../../components/ShowCategory';
import {Bold} from '../../constants/fonts';
import {useNavigation} from '@react-navigation/native';

export default function FavoriteScreen() {
  const [isActive, setisActive] = useState(1);
  const {navigate} = useNavigation();

  const singlePage = data => {
    navigate('Discovery', {
      screen: 'FoodDetails',
      params: {product: data},
    });
    // navigate('FoodDetails', {product: data});
  };
  const changeActivebtn = d => {
    setisActive(d);
  };
  return (
    <View style={styles.container}>
      <SearchInput get_text={text => console.log(text)} />
      <View
        style={{
          width: '95%',
          height: 65,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: 30,
          borderColor: 'black',
          borderWidth: 1,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <Animated.View
          entering={BounceIn}
          exiting={BounceOut}
          style={[styles.btn, isActive === 1 && styles.activebtn]}>
          <TouchableOpacity
            onPress={() => changeActivebtn(1)}
            style={[styles.btn, isActive === 1 && styles.activebtn]}>
            <Animated.Text
              style={[styles.text, isActive === 1 && styles.activetext]}>
              Food Items
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          entering={BounceIn}
          exiting={BounceOut}
          style={[styles.btn, isActive === 2 && styles.activebtn]}>
          <TouchableOpacity
            style={[styles.btn, isActive === 2 && styles.activebtn]}
            onPress={() => changeActivebtn(2)}>
            <Text style={[styles.text, isActive === 2 && styles.activetext]}>
              Restaurant
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {isActive === 1 && (
        <ItemSlider
          Positionhorizontal={false}
          data={foodItems}
          discount={false}
          action={singlePage}
        />
      )}

      {isActive === 2 && <ShowCategory data={categories} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  activebtn: {
    backgroundColor: Colors.orangemain,
  },

  text: {
    textAlign: 'center',
  },

  activetext: {
    fontFamily: Bold,
  },

  btn: {
    height: 60,
    width: '50%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
