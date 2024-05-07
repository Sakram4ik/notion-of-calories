import React, {useContext, useState} from 'react';
import {Button, Text, View} from 'react-native';
import InputApp from '../../components/Imput';
import {useForm} from 'react-hook-form';
import {ILogin, IToken} from '../../type/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginData} from './dataLogin';
import {Response} from '../../type/fetch';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useLoginMutation} from '../../store/server/server.fetch';
import {ContextRefetch} from '../../hook/context';
export default function Login({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const {
    handleSubmit,
    control,

    formState: {},
  } = useForm<ILogin>();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoadingMessage, setisLoadingMessage] = useState('');
  const [refetch, setRefetch] = useContext(ContextRefetch);
  const [LoginUser] = useLoginMutation();
  const handlerLogin = async (value: ILogin) => {
    setisLoadingMessage('Load');
    const value2 = {
      email: value.email,
      password: value.password,
      name: '',
    };
    const login = (await LoginUser(value2)) as Response<IToken>;
    console.log(value);
    if (login.data) {
      await AsyncStorage.setItem('userToken', login.data.token);
      setisLoadingMessage('');
      setRefetch(refetch + 1);
      navigation.navigate('Main', {screen: 'Home'});
    }
    if (login.error) {
      console.log('dddddhhggh');
      setisLoadingMessage('');
      setErrorMessage(login.error.data.message);
    }
  };
  return (
    <View>
      {LoginData.map((data, index) => (
        <InputApp
          control={control}
          key={index}
          name={data.name}
          rules={data.rules}
        />
      ))}
      <Text>{isLoadingMessage}</Text>
      <Text>{errorMessage}</Text>
      <Button title="Go it" onPress={handleSubmit(handlerLogin)} />
    </View>
  );
}
