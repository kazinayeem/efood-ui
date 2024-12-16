import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {DEFAULT} from '../constants/images';

export default function MyCarousel() {
  const width = Dimensions.get('window').width; // Get screen width

  // Array of image sources

  const imageLink = [
    'https://res.cloudinary.com/daq7v0wmf/image/upload/v1734326197/dev/fwrkxmrwom4fpn9wqct3.jpg',
    'https://res.cloudinary.com/daq7v0wmf/image/upload/v1734326173/dev/bpnuub5xfrbhfu8r5t63.jpg',
    'https://res.cloudinary.com/daq7v0wmf/image/upload/v1734326187/dev/eng5nsqizpeujbeoxv9i.jpg',
    'https://res.cloudinary.com/daq7v0wmf/image/upload/v1734326204/dev/hk7canfapxwmrx4vjiul.jpg',
  ];
  return (
    <View style={styles.container}>
      <Carousel
        pagingEnabled
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={imageLink}
        scrollAnimationDuration={1000}
        renderItem={({index, item}) => (
          <View style={styles.carouselItem}>
            <Image
              defaultSource={DEFAULT}
              source={{uri: item}}
              style={styles.carouselImage}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderEndColor: 5,
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
