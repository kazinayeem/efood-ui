import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function SearchInput({get_text}) {
  const onTypeText = text => {
    get_text(text);
  };
  return (
    <View style={styles.containet}>
      <Icon name="search" style={{marginRight: 10}} size={15} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={'grey'}
        onChangeText={onTypeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containet: {
    alignSelf: 'center',
    width: '95%',
    flexDirection: 'row',
    height: 45,
    backgroundColor: '#d6d6db',
    marginTop: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
});
