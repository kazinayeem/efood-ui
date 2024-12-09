import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SPLASH_SCREEN} from '../../constants/images';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Welcome'); // Navigate to Welcome after 3 seconds
    }, 3000);

    // Clear the timeout if the component unmounts to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Welcome');
      }}
      style={styles.container}>
      <ImageBackground
        source={SPLASH_SCREEN}
        resizeMode="cover"
        style={styles.image}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '110%',
  },
});

export default SplashScreen;
