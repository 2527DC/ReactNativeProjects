import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleBookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Schedule your booking from here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5dc',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ScheduleBookingScreen;
