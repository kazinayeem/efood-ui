import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {Bold, Regular} from '../constants/fonts';
import {Colors} from '../constants/colors';
import Animated, {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeOut,
} from 'react-native-reanimated';

export default function ShowCategory({data, header = true}) {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
      {header && (
        <View style={styles.header}>
          <Text style={styles.headertext}>Categories</Text>
          <TouchableOpacity style={styles.headerbtn}>
            <Text style={styles.btntext}>See all</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlashList
        data={data}
        horizontal
        estimatedItemSize={2000}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <Animated.View
              entering={FadeInLeft.duration(1000)}
              exiting={FadeInRight.duration(1000)}
              key={index}
              style={styles.itemcontainer}>
              <View style={styles.imagecontainer}>
                <Image
                  width={'100%'}
                  height={150}
                  resizeMode="contain"
                  source={{uri: item.image}}
                />
              </View>

              <Text style={styles.titletext}>{item.name}</Text>
              <Text style={styles.count_text}>{item.items.length} places</Text>
            </Animated.View>
          );
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  btntext: {
    color: Colors.orangemain,
    fontFamily: Regular,
  },
  header: {
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '99%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headertext: {
    fontFamily: Bold,
    fontSize: 18,
  },
  headerbtn: {
    borderRadius: 20,
    padding: 8,
    backgroundColor: '#fed8cc',
  },
  itemcontainer: {
    height: 210,
    borderRadius: 10,
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 0.2,
  },
  imagecontainer: {
    backgroundColor: '#ffe7cc',
    width: 200,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titletext: {
    fontSize: 20,
    paddingHorizontal: 20,
    fontFamily: Bold,
  },
  count_text: {
    paddingHorizontal: 20,
    fontFamily: Regular,
    fontSize: 15,
    color: 'grey',
  },
});
