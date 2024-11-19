// /src/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookingHistoryScreen from '../screens/BookingHistoryScreen';
import ScheduleBookingScreen from '../screens/ScheduleBookingScreen';
import LogoutScreen from '../screens/LogoutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator(); 

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Booking History" component={BookingHistoryScreen} />
      <Drawer.Screen name="Schedule Booking" component={ScheduleBookingScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
