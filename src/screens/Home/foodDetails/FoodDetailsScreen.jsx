import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function FoodDetailsScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Update Username Dynamically</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
