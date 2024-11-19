import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Updated Picker import

export default function RegistrationScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Gender: ${gender}`);
    console.log(`Phone: ${phoneNumber}`);
    alert(`Registered:\nUsername: ${username}\nEmail: ${email}\nGender: ${gender}\nPhone: ${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});
