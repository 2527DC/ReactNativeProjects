import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have logged out. See you again!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe4e1',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LogoutScreen;
