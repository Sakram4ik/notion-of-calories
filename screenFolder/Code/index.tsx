import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import InputApp from '../../components/Imput';
import {CodeData} from './CodeData';
import {useForm} from 'react-hook-form';
import {ICode} from '../../type/user';
import useSendCode from '../../hook/useSendCode';
import {useCheckAndRegisterMutation} from '../../store/server/server.fetch';
import useGetUserCodeToken from '../../hook/useGetUserCodeToken';
import {IReqCode, RegisterResponse} from '../../type/fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

export default function Code({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoadingMessage, setisLoadingMessage] = useState('');
  const {
    handleSubmit,
    control,

    formState: {},
  } = useForm<ICode>();

  useSendCode();

  const sendData = useGetUserCodeToken();
  const [checkAndRegister] = useCheckAndRegisterMutation();

  const handlerCode = async (value: ICode) => {
    const send: IReqCode = {
      code: value.code,
      token: sendData.token,
    };
    setisLoadingMessage('Load');
    const code = (await checkAndRegister(send)) as RegisterResponse;
    if (code.data) {
      await AsyncStorage.setItem('userToken', code.data.token);
      setisLoadingMessage('');
      navigation.navigate('Main', {screen: 'Home'});
    }
    if (code.error) {
      setisLoadingMessage('');
      setErrorMessage(code.error.data.message);
    }
  };

  return (
    <View>
      <InputApp control={control} name={CodeData.name} rules={CodeData.rules} />
      <Text>{isLoadingMessage}</Text>
      <Text>{errorMessage}</Text>
      <Button title="Go it" onPress={handleSubmit(handlerCode)} />
    </View>
  );
}
