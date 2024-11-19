import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RootLayout = () => {
  return (
    <View style={styles.container} >
      <Text> this is RootLayout</Text>
    </View>
  )
}

export default RootLayout

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
 
})