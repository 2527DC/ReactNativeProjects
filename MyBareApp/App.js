import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "./global.css";
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreem from './src/screens/RegisterScreem';
// const Stack = createNativeStackNavigator();
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const App = () => {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="US"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
        containerStyle={{
          width: '90%',
          borderRadius: 10,
          overflow: 'hidden',
        }}
        textContainerStyle={{
          backgroundColor: '#fff',
        }}
      />
    </View>
  );
};


export default App;
