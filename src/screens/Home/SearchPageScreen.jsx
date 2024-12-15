import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchInput from '../../components/SearchInput';
import {categories} from '../../config/data';
import {Regular} from '../../constants/fonts';

export default function SearchPageScreen() {
  return (
    <View>
      <SearchInput
        get_text={text => {
          console.log(text);
        }}
      />

      <View
        style={{
          alignSelf: 'center',
          width: '80%',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {categories?.map(c => {
          return (
            <TouchableOpacity
              key={c.id}
              style={{
                width: 60,
                height: 30,
                backgroundColor: 'tomato',
                padding: 5,
                margin: 10,
                borderRadius: 15,
                alignItems: 'center',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontFamily: Regular,
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                {c.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
