import React, { useEffect } from 'react'
import { SplashScreen, Stack} from 'expo-router'
const RootLayout = () => {
  useEffect(() => {
    const prepare = async () => {
      try {
        // Prevent auto-hiding of the splash screen
        await SplashScreen.preventAutoHideAsync();

        // Simulate a task (e.g., data loading or app initialization)
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen once the app is ready
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    
    </Stack>
  );
};

export default RootLayout;