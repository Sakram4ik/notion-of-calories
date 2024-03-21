import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {useRegisterUserMutation} from '../store/server/server.fetch';

export default function Register() {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [registerUser, {data,error}] = useRegisterUserMutation();
  const handler = () => {
    const body = {
      email: 'fjf',
      name: Name,
      password: Password,
    };
    console.log(body);
    registerUser(body);
    console.log(data);
    console.log(error)
  };

  return (
    <View>
      <Text>gagagffff</Text>
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
