import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PROFILE_LOGO} from '../../constants/images';
import {AppContext} from '../../context/AppContext';

export default function ProfileScreen() {
  const {logOut} = useContext(AppContext);
  const handlePress = item => {
    console.log(`${item} pressed`);
    // You can add navigation or other logic here
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        {/* Profile Image */}
        <Image
          source={PROFILE_LOGO} // Replace with your image source or dynamic source
          style={styles.profileImage}
        />
        {/* User Details */}
        <Text style={styles.userName}>test user</Text>
        <Text style={styles.userEmail}>test@gmail.com</Text>
      </View>

      {/* Navigation Links */}
      <View style={styles.navLinks}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handlePress('My Profile')}>
          <Icon name="person" size={24} color="#555" style={styles.icon} />
          <Text style={styles.navText}>My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            handlePress('My Orders');
          }}>
          <Icon
            name="shopping-cart"
            size={24}
            color="#555"
            style={styles.icon}
          />
          <Text style={styles.navText}>My Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handlePress('Delivery Address')}>
          <Icon name="location-on" size={24} color="#555" style={styles.icon} />
          <Text style={styles.navText}>Delivery Address</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handlePress('Payments Methods')}>
          <Icon name="credit-card" size={24} color="#555" style={styles.icon} />
          <Text style={styles.navText}>Payments Methods</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handlePress('Contact Us')}>
          <Icon name="email" size={24} color="#555" style={styles.icon} />
          <Text style={styles.navText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handlePress('Settings')}>
          <Icon name="settings" size={24} color="#555" style={styles.icon} />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handlePress('Help & FAQ')}>
          <Icon name="help" size={24} color="#555" style={styles.icon} />
          <Text style={styles.navText}>Help & FAQ</Text>
        </TouchableOpacity>
      </View>

      {/* Log Out Button */}
      <TouchableOpacity
        style={styles.logoutContainer}
        onPress={() => {
          logOut();
        }}>
        <Text style={styles.logoutButton}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the image circular
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  navLinks: {
    marginBottom: 30,
  },
  navItem: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center',
    paddingVertical: 10,
  },
  navText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10, // Space between the icon and text
  },
  icon: {
    marginRight: 10, // Space between the icon and text
  },
  logoutContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  logoutButton: {
    fontSize: 16,
    color: '#FF6347', // Color for log out button (can change)
    fontWeight: 'bold',
  },
});
