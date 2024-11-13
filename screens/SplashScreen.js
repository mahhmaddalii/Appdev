// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to Login after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Use replace to avoid back navigation to splash
    }, 2000); // 2-second delay

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Background color for splash screen
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Text color
  },
});

export default SplashScreen;
