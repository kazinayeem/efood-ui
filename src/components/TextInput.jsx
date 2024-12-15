import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../constants/colors';
import {SemiBold} from '../constants/fonts';

export function TextInputAuth({
  title,
  placeHolderText,
  placeHolderTextColor,
  bgcolor,
  textcolor,
  bordercolor,
  isIcon,
  mb,
  mt,
  onChangeText,
}) {
  const [password, setpassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const changePasswordView = () => {
    if (password) {
      setpassword(false);
    } else {
      setpassword(true);
    }
  };
  return (
    <View
      style={[
        styles.container,
        {
          marginTop: mt || 0,
          marginBlock: mb || 0,
        },
      ]}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.sectioncontianer,
          {
            borderColor: isFocused ? Colors.orangemain : bordercolor,
          },
        ]}>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: bgcolor || 'white',
              color: textcolor || 'black',
              width: isIcon ? '90%' : '100%',
            },
          ]}
          placeholder={placeHolderText}
          placeholderTextColor={placeHolderTextColor}
          secureTextEntry={isIcon ? !password : false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
        />
        {isIcon && (
          <TouchableOpacity onPress={changePasswordView}>
            <Icon
              name={password ? 'eye' : 'eye-off'}
              color={bordercolor}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  sectioncontianer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  input: {
    width: '90%',
    height: 50,
  },
  title: {
    fontSize: 15,
    fontFamily: SemiBold,
  },
});
