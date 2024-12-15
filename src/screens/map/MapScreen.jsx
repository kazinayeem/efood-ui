import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useHeaderHeight} from '@react-navigation/elements';

export default function MapScreen() {
  const h = useHeaderHeight();

  return (
    <View style={[styles.container, {marginTop: h}]}>
      <Text>MapScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
