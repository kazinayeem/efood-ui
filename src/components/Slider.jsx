import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {SLIDER1, SLIDER2, SLIDER3, SLIDER4, SLIDER5} from '../constants/images'; // Adjust image paths

export default function MyCarousel() {
  const width = Dimensions.get('window').width; // Get screen width

  // Array of image sources
  const images = [SLIDER1, SLIDER2, SLIDER3, SLIDER4, SLIDER5];

  return (
    <View style={styles.container}>
      <Carousel
        pagingEnabled
        loop
        width={width} // Set the width to be the screen width
        height={width / 2} // Set the height to half the screen width
        autoPlay={true} // Enable autoPlay to automatically scroll
        data={images} // Use the images array for the carousel
        scrollAnimationDuration={1000} // Duration of the scroll animation
        // onSnapToItem={index => console.log('Current index:', index)} // Log current index on snap
        renderItem={({index, item}) => (
          <View style={styles.carouselItem}>
            <Image source={item} style={styles.carouselImage} />
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
