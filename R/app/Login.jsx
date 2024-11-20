import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router'; // Import useRouter
import { useAppContext } from '../context/AppContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter(); // Initialize the router
  
 
  const handleLogin = () => {
    console.log('Navigating to DrawerNavigator');
    router.replace('/navigation/DrawerNavigator');
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-gray-100">
      {/* Card container */}
      <View className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <Text className="text-3xl font-semibold mb-6 text-center">Login</Text>

        {/* Email Input */}
        <View className="w-full mb-4">
          <TextInput
            className="border p-3 rounded-lg text-base"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View className="w-full mb-4 relative">
          <TextInput
            className="border p-3 rounded-lg text-base"
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}  // Toggle password visibility
            value={password}
            onChangeText={setPassword}
          />
          {/* Toggle visibility button */}
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute right-3 top-3"
          >
            <Text className="text-blue-500">
              {isPasswordVisible ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin} // Trigger the login function
          className="bg-blue-500 w-full py-3 rounded-lg mb-4"
        >
          <Text className="text-white text-center text-lg">Login</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <Link href={'ForgotPassword'}>
          <Text className="text-blue-500 mb-4 text-center">Forgot Password?</Text>
          </Link>

        {/* Register */}
        
          <Text className="text-sm">
            Don't have an account?{' '}
            <Link href={'Register'}>
              <Text className="text-blue-500">Register</Text>
            </Link>
          </Text>
        
      </View>
    </View>
  );
};

export default Login;
