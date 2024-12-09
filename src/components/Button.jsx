import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {FACEBOOK_LOGO, GOOGLE_LOGO} from '../constants/images';
import {Colors} from '../constants/colors';

export function LoginWithFaceBook() {
  return (
    <TouchableOpacity style={styles.btncontainer}>
      <Image source={GOOGLE_LOGO} resizeMode="cover" style={styles.image} />
      <Text style={styles.text}>Login with Google</Text>
    </TouchableOpacity>
  );
}

export function LoginWithGoogle() {
  return (
    <TouchableOpacity style={styles.btncontainer}>
      <Image source={FACEBOOK_LOGO} resizeMode="cover" style={styles.image} />
      <Text style={styles.text}>Login with Facebook</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btncontainer: {
    borderRadius: 20,
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: Colors.white,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});
