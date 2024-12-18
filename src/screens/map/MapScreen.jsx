import {View, Text, StyleSheet, Alert, Platform} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (result === RESULTS.GRANTED) {
        return true;
      } else {
        const newResult = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        return newResult === RESULTS.GRANTED;
      }
    }
  };

  const getCurrentLocation = useCallback(async () => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      try {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position); // Update location state
            console.log('Location fetched: ', position);
          },
          error => {
            console.error('Error fetching location: ', error);
            Alert.alert('Error', `Unable to fetch location: ${error.message}`);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } catch (error) {
        console.error('Error: ', error);
        Alert.alert('Error', `Error fetching location: ${error.message}`);
      }
    } else {
      Alert.alert(
        'Location permission is required to get your current location.',
      );
    }
  }, []); // Empty dependency array, `getCurrentLocation` only changes if dependencies change.

  useEffect(() => {
    if (permissionGranted) {
      getCurrentLocation();
    }
    // Check and request permissions when the component loads
    requestLocationPermission().then(granted => {
      setPermissionGranted(granted);
      if (granted) {
        getCurrentLocation();
      } else {
        Alert.alert('Location permission is required to use the map.');
      }
    });
  }, [getCurrentLocation, permissionGranted]);

  const h = useHeaderHeight();
  const snapPoints = useMemo(() => ['25%', '50%', '80%'], []);
  const bottomSheetRef = useRef(null);

  if (!location) {
    // Show loading state until location is available
    return (
      <View
        style={[
          styles.container,
          {marginTop: h, justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Text>Loading your location...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container]}>
      <MapView
        provider="google"
        style={{width: '100%', height: '100%'}}
        region={{
          latitude: location.coords.latitude, // Use current location
          longitude: location.coords.longitude, // Use current location
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true} // Automatically show user location if available
        followsUserLocation={true} // Follow user location as it changes
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You"
          />
        )}
      </MapView>
      <BottomSheet
        ref={bottomSheetRef}
        enableDynamicSizing={false}
        snapPoints={snapPoints}>
        <BottomSheetView style={styles.contentContainer}>
          <AnimatedCircularProgress
            size={120}
            width={15}
            fill={70}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});
