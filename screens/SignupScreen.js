import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
// Uncomment the following imports once SDKs are set up
// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
// import appleAuth from '@invertase/react-native-apple-authentication';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

const SignupScreen = ({ navigation }) => {

  const handleFacebookLogin = () => {
    Alert.alert("Facebook login functionality goes here");
  };

  const handleAppleLogin = () => {
    Alert.alert("Apple login functionality goes here");
  };

  const handleGoogleLogin = () => {
    Alert.alert("Google login functionality goes here");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up with</Text>

      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]} onPress={handleFacebookLogin}>
        <Image source={require('../assets/facebook-logo.png')} style={styles.logo} />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#f4a460' }]} onPress={handleAppleLogin}>
        <Image source={require('../assets/apple-logo.png')} style={styles.logo} />
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4437' }]} onPress={handleGoogleLogin}>
        <Image source={require('../assets/google-logo.png')} style={styles.logo} />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '80%',
    marginBottom: 20,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  logo: {
    width: 24,
    height: 24,
  },
});

export default SignupScreen;
