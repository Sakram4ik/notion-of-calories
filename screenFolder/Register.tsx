import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useRegisterUserMutation} from '../store/server/server.fetch';

export default function Register() {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [registerUser, {data}] = useRegisterUserMutation();
  const handler = () => {
    const body = {
      email: 'ff',
      name: Name,
      password: Password,
    };
    console.log(body);
    registerUser(body);
    console.log(data);
  };

  return (
    <View>
      <Text>gagagffffemS</Text>
      <TextInput value={Name} onChangeText={setName} placeholder="user name" />
      <TextInput
        value={Password}
        onChangeText={setPassword}
        placeholder="password"
      />
      <Button title="Go it " onPress={handler} />
    </View>
  );
}
