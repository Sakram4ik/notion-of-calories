import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {useRegisterUserMutation} from '../store/server/server.fetch';
import {IRegistr} from '../type/user';
import {useForm} from 'react-hook-form';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import InputApp from '../components/Imput';
import {FetchBaseQueryError} from '../type/fetch';

export default function Register({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const {
    handleSubmit,
    control,

    formState: {},
  } = useForm<IRegistr>();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoadingMessage, setisLoadingMessage] = useState('');
  interface RegisterResponse {
    data: any;
    error: any;
    isLoading: any;
  }
  const [registerUser] = useRegisterUserMutation();
  const handlerRegister = async (value: IRegistr) => {
    // console.log(value)

    const {data, error}: RegisterResponse = await registerUser(value);
    // console.log(data);
    // console.log(error);
    if (data) {
      navigation.navigate('Home');
    }
    if (error) {
      setErrorMessage(error.data.message);
      console.log(errorMessage);
    }
  };

  return (
    <View>
      <InputApp
        control={control}
        name={'name'}
        rules={{
          required: 'user·name·is·required',
          minLength: {
            value: 5,
            message: 'Name should be minimum 5 characters long',
          },
        }}
      />
      <InputApp
        control={control}
        name={'password'}
        rules={{
          required: 'user·password·is·required',
          minLength: {
            value: 5,
            message: 'Password should be minimum 5 characters long',
          },
        }}
      />
      <InputApp
        control={control}
        name={'email'}
        rules={{
          required: 'user·email·is·required',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
          },
        }}
      />
      <Text>{errorMessage}</Text>
      <Button title="Go it " onPress={handleSubmit(handlerRegister)} />
    </View>
  );
}
