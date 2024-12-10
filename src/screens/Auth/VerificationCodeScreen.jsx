/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';
import {Regular, SemiBold} from '../../constants/fonts';
export default function VerificationCodeScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.allsectioncontainer}>
        <View>
          <Text style={styles.headertitle}>Verification Code</Text>
          <Text
            style={[
              styles.headertitle,
              {fontSize: 13, fontWeight: '400', fontFamily: Regular},
            ]}>
            Please Enter Your email address has been send abc@gmail.com
          </Text>

          <OtpInput
            numberOfDigits={4}
            placeholder="******"
            onTextChange={text => console.log(text)}
            onFilled={text => {
              navigate('MainNavigator');
            }}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            focusStickBlinkingDuration={500}
            blurOnFilled={true}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  allsectioncontainer: {
    width: '90%',
    height: '70%',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    justifyContent: 'flex-start',
  },

  headertitle: {
    fontSize: 30,
    color: 'black',
    fontFamily: SemiBold,
    textAlign: 'left',
    marginBottom: 15,
  },
});
