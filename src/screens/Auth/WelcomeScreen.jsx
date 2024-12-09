/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {LoginWithFaceBook, LoginWithGoogle} from '../../components/Button';
import {WELCOME_BG} from '../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/colors';
import {Bold, Regular} from '../../constants/fonts';
import {useNavigation} from '@react-navigation/native';
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimg}
        source={WELCOME_BG}
        resizeMode="cover">
        <LinearGradient
          colors={[
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            '#f9ce9c',
            '#fa8235',
            '#f83b01',
          ]}
          style={styles.container}
          start={{x: 0.5, y: 0}}
          end={{x: 0.9, y: 1}}>
          <View style={styles.allsectioncontiner}>
            <View style={styles.textsectioncontainer}>
              <Text style={[styles.title, {color: 'black'}]}>Welcome to</Text>
              <Text style={[styles.title, {color: Colors.orangemain}]}>
                Fast Food
              </Text>
              <Text style={styles.subtitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                aperiam aliquid. Quia
              </Text>
            </View>

            <TouchableOpacity
              style={styles.swesection}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.swetext}>Start with Email</Text>
            </TouchableOpacity>

            <View style={styles.siwcontainer}>
              <View style={styles.line} />
              <Text>Sign In with</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.authbtnsection}>
              <LoginWithFaceBook />
              <LoginWithGoogle />
            </View>

            <View style={styles.signinsection}>
              <Text>Already have an account ?</Text>
              <Text>Sign In</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  bgimg: {
    flex: 1,
  },
  allsectioncontiner: {
    width: '90%',
    height: '80%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    bottom: 50,
    position: 'absolute',
  },
  textsectioncontainer: {
    flexDirection: 'column',
    gap: 0,
    padding: 0,
    margin: 0,
  },
  title: {
    fontSize: 50,
    fontFamily: Bold,
    margin: 0,
    padding: 0,
    gap: 0,
    lineHeight: 65,
  },
  subtitle: {
    fontSize: 15,
    color: '#595C6F',
    fontFamily: Regular,
  },
  swesection: {
    width: '99%',
    height: 50,
    borderRadius: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swetext: {
    color: '#ffff',
    fontSize: 14,
    fontFamily: Regular,
    textAlign: 'center',
  },
  line: {
    width: '30%',
    height: 2,
    backgroundColor: 'black',
  },
  siwcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  authbtnsection: {
    flexDirection: 'column',
  },
  signinsection: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '99%',
  },
});
