import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
 // Import SplashScreen module
import { Slot, Stack } from 'expo-router';

const RootLayout = () => {
  useEffect(() => {
    const prepare = async () => {
      try {
        // Prevent auto-hiding of the splash screen
        await SplashScreen.preventAutoHideAsync();

        // Simulate some initialization tasks (10-second delay here)
        await new Promise(resolve => setTimeout(resolve, 10000));  // 10 seconds
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen after 10 seconds
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return (
   <Slot/>
  );
};

export default RootLayout;
