/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  BigButton,
  LoginWithFaceBook,
  LoginWithGoogle,
} from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {styles as st} from './WelcomeScreen';
import {TextInputAuth} from '../../components/TextInput';
import {Colors} from '../../constants/colors';
import {SemiBold} from '../../constants/fonts';
export default function LoginScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.allsectioncontainer}>
        <View>
          <Text style={styles.headertitle}>Login</Text>
          <TextInputAuth
            title={'Email'}
            isIcon={false}
            placeHolderText={'Your Email'}
            placeHolderTextColor={'#abacb6'}
            bordercolor={'#abacb6'}
            mb={20}
          />

          <TextInputAuth
            title={'Password'}
            isIcon={true}
            placeHolderText={'Password'}
            placeHolderTextColor={'#abacb6'}
            bordercolor={'#abacb6'}
          />

          <TouchableOpacity onPress={() => navigate('ResetPassword')}>
            <Text style={styles.fptext}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <BigButton title={'Login'} action={navigate} actionTitle={'MainNavigator'} />
        <View style={st.signinsection}>
          <Text>Dont't Have an account ?</Text>
          <TouchableOpacity onPress={() => navigate('SignUp')}>
            <Text
              style={{
                color: Colors.orangemain,
                textDecorationLine: 'underline',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View style={st.siwcontainer}>
          <View style={st.line} />
          <Text>Sign In with</Text>
          <View style={st.line} />
        </View>

        <View style={styles.auth}>
          <LoginWithFaceBook border={true} />
          <LoginWithGoogle border={true} />
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
    justifyContent: 'space-between',
  },
  auth: {
    flexDirection: 'column',
  },
  fptext: {
    textAlign: 'right',
    marginTop: 5,
    color: Colors.orangemain,
    textDecorationLine: 'underline',
  },
  headertitle: {
    fontSize: 30,
    color: 'black',
    fontFamily: SemiBold,
    textAlign: 'left',
    marginBottom: 15,
  },
});
