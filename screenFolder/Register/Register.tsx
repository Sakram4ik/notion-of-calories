import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {useLoginMutation} from '../../store/server/server.fetch';
import {IRegister} from '../../type/user';
import {useForm} from 'react-hook-form';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import InputApp from '../../components/Imput';
import {registerData} from './RegisterData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const {
    handleSubmit,
    control,

    formState: {},
  } = useForm<IRegister>();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoadingMessage, setisLoadingMessage] = useState('');
  const [registerUser] = useLoginMutation();
  const handlerRegister = async (value: IRegister) => {
    setisLoadingMessage('Load');
    const {data, error} = await registerUser(value).unwrap();

    if (data) {
      await AsyncStorage.setItem('token', data.token);
      setisLoadingMessage('');
      navigation.navigate('Main', {screen: 'Home'});
    }
    if (error) {
      setisLoadingMessage('');
      setErrorMessage(error.data.message);
    }
  };

  return (
    <View>
      <Text>gggg</Text>
      {registerData.map((data, index) => (
        <InputApp
          control={control}
          key={index}
          name={data.name}
          rules={data.rules}
        />
      ))}
      <Text>{isLoadingMessage}</Text>
      <Text>{errorMessage}</Text>
      <Button title="Go it " onPress={handleSubmit(handlerRegister)} />
    </View>
  );
}
