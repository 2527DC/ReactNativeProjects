import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';


export default function App() {
  // Check if the platform is iOS
  // if (Platform.OS === 'ios') {
    // Render the app on iOS only
    // return <AppNavigator />; // Use the navigator as the root of the app
  // } else {
  //   // Optionally render a message or do nothing for Android
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.text}>This app is only available on iOS.</Text>
  //     </View>
  //   );
  // }
  return <View style={styles.container}>
        <Text style={styles.text}>welcome </Text>
      </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the entire screen space
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center', // Horizontally center the content
    backgroundColor: '#fff', // Optional: set background color
  },
  text: {
    fontSize: 18, // Set text size
    textAlign: 'center', // Center the text horizontally
  },
});
