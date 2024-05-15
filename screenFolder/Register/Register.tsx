import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {useRegisterUserMutation} from '../../store/server/server.fetch';
import {IRegister, IToken} from '../../type/user';
import {useForm} from 'react-hook-form';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import InputApp from '../../components/Imput';
import {registerData} from './RegisterData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Response} from '../../type/fetch';

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
  const [registerUser] = useRegisterUserMutation();

  const handlerRegister = async (value: IRegister) => {
    console.log('ddddd');
    setisLoadingMessage('Load');
    const register = (await registerUser(value)) as Response<IToken>;

    if (register.data) {
      console.log('dddddhhh');
      await AsyncStorage.setItem('tokenCode', register.data.token);
      setisLoadingMessage('');
      navigation.navigate('Code');
    }
    if (register.error) {
      console.log('dddddhhggh');
      setisLoadingMessage('');
      setErrorMessage(register.error.error);
    }
  };

  return (
    <View>
      <Text>gggfffffgvv</Text>
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
