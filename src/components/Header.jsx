import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.continer}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon
          style={{textAlign: 'center'}}
          name="left"
          size={25}
          color="white"
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Icon
          style={{textAlign: 'center'}}
          name="close"
          size={25}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    width: '100%',
    height: 56,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#857972',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
