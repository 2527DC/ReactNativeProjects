// MyDrawer.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
