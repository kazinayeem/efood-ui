import {
  View,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {SLIDER1, SLIDER2} from '../constants/images';

export default function Slider() {
  const w = useWindowDimensions().width;
  const images = [
    {
      id: 1,
      link: SLIDER1,
    },
    {
      id: 2,
      link: SLIDER2,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        renderItem={({item, index, separators}) => {
          return (
            <Image
              key={index}
              source={item.link}
              style={[
                styles.image,
                {width: w - 30, borderRadius: 10, marginLeft: 10},
              ]}
            />
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '99%',
    height: 210,
    marginTop: 10,
  },
  image: {
    height: 210,
    resizeMode: 'cover',
  },
});
