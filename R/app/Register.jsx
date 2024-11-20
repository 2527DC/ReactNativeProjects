import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker
import CountryPicker from 'react-native-country-picker-modal'; // Import CountryPicker

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState(''); // Gender state
  const [countryCode, setCountryCode] = useState('91'); // Default country code for India
  const [cca2, setCca2] = useState('IN'); // Default country cca2 code for India

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword || !phone || !gender || !countryCode) {
      alert("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Logic for user registration goes here
    console.log({ username, email, password, confirmPassword, phone, gender, countryCode });
    // Clear fields after registration (optional)
    resetForm();
  };

  const onSelect = (country) => {
    setCountryCode(country.callingCode[0]); // Set the country code (calling code)
    setCca2(country.cca2); // Set the country cca2 code
  };

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
    setGender('');
    setCountryCode('91');
    setCca2('IN');
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-gray-100">
      {/* Card container */}
      <View className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <Text className="text-2xl font-bold text-center mb-6">Register</Text>

        {/* Username Input */}
        <View className="mb-4">
          <TextInput
            className="border border-gray-300 p-3 rounded-lg text-lg w-full"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Email Input */}
        <View className="mb-4">
          <TextInput
            className="border border-gray-300 p-3 rounded-lg text-lg w-full"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View className="mb-4">
          <TextInput
            className="border border-gray-300 p-3 rounded-lg text-lg w-full"
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Confirm Password Input */}
        <View className="mb-4">
          <TextInput
            className="border border-gray-300 p-3 rounded-lg text-lg w-full"
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Gender Picker (Spinner) */}
        <View className="mb-4">
          <Text className="mb-2 text-lg">Gender</Text>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={{ height: 50, width: '100%' }}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        {/* Phone Number and Country Code Input */}
        <View className="mb-4">
          <Text className="mb-2 text-lg">Phone Number</Text>
          <View className="flex-row items-center border border-gray-300 p-3 rounded-lg w-full">
            {/* Country Picker */}
            <CountryPicker
              countryCode={cca2}
              withFilter
              withFlag
              withCountryNameButton={false} // Hide country name
              onSelect={onSelect}
              containerButtonStyle={{ paddingRight: 8, paddingLeft: 8, width: 80 }} // Adjust button style
            />
            <TextInput
              className="flex-1 text-lg p-2"
              placeholder="Phone Number"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              maxLength={15}
              // Prefix phone number with selected country code
              textContentType="telephoneNumber"
              onFocus={() => phone && !phone.startsWith(countryCode) && setPhone(`${countryCode} ${phone}`)} // Auto format on focus
            />
          </View>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-blue-500 p-4 rounded-lg mt-6"
        >
          <Text className="text-white text-lg font-bold text-center">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
