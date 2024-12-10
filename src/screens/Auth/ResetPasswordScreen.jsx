/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {BigButton} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {TextInputAuth} from '../../components/TextInput';
import {Regular, SemiBold} from '../../constants/fonts';
export default function ResetPasswordScreen() {
  const {navigate} = useNavigation();
  const [email, setEmail] = useState('');
  const handleEmailChange = text => {
    setEmail(text); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.allsectioncontainer}>
        <View>
          <Text style={styles.headertitle}>Reset Password</Text>
          <Text
            style={[
              styles.headertitle,
              {fontSize: 13, fontWeight: '400', fontFamily: Regular},
            ]}>
            Please Enter Your email address to request a password reset
          </Text>
          <TextInputAuth
            title={'Email'}
            isIcon={false}
            placeHolderText={'Your Email'}
            placeHolderTextColor={'#abacb6'}
            bordercolor={'#abacb6'}
            mb={20}
            mt={20}
            onChangeText={handleEmailChange}
          />
        </View>

        <BigButton
          title={'Submit'}
          action={navigate}
          actionTitle={'VerificationCode'}
        />
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
  auth: {
    flexDirection: 'column',
  },

  headertitle: {
    fontSize: 30,
    color: 'black',
    fontFamily: SemiBold,
    textAlign: 'left',
    marginBottom: 15,
  },
});
