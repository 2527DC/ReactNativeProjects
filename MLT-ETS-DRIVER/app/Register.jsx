import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    // Logic for user registration goes here
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-gray-100">
      {/* Card container */}
      <View className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <Text className="text-3xl font-semibold mb-6 text-center">Register</Text>

        {/* Username Input */}
        <View className="w-full mb-4">
          <TextInput
            className="border p-3 rounded-lg text-base"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

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
        <View className="w-full mb-4">
          <TextInput
            className="border p-3 rounded-lg text-base"
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Confirm Password Input */}
        <View className="w-full mb-4">
          <TextInput
            className="border p-3 rounded-lg text-base"
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Gender Picker */}
        <View className="w-full mb-4">
          <Text className="mb-2">Gender</Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity
              onPress={() => setGender('Male')}
              className={`p-3 rounded-lg ${gender === 'Male' ? 'bg-blue-500' : 'bg-gray-200'}`}
            >
              <Text className={`${gender === 'Male' ? 'text-white' : 'text-black'}`}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender('Female')}
              className={`p-3 rounded-lg ${gender === 'Female' ? 'bg-pink-500' : 'bg-gray-200'}`}
            >
              <Text className={`${gender === 'Female' ? 'text-white' : 'text-black'}`}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender('Other')}
              className={`p-3 rounded-lg ${gender === 'Other' ? 'bg-yellow-500' : 'bg-gray-200'}`}
            >
              <Text className={`${gender === 'Other' ? 'text-white' : 'text-black'}`}>Other</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Phone Number Input */}
        <View className="w-full mb-4">
          <TextInput
            className="border p-3 rounded-lg text-base"
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Register Button */}
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-blue-500 w-full py-3 rounded-lg mb-4"
        >
          <Text className="text-white text-center text-lg">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
