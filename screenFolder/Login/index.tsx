import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import InputApp from '../../components/Imput';
import {useForm} from 'react-hook-form';
import {ILogin, IToken} from '../../type/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginData} from './dataLogin';
import {Response} from '../../type/fetch';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useLoginMutation} from '../../store/server/server.fetch';
import {ContextRefetch} from '../../hook/context';
import colors from '../../components/colors/colors';
import BackButton from '../../components/backButton/backButton';
// import BackArrow from '../../components/backButton/backButtonImage';
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
      setErrorMessage(login.error.error);
    }
  };

  return (
    <View style={styles.block}>
      <BackButton />
      <Image
        style={styles.image}
        source={require('../../components/Image/CapybaraLoaderIcon.png')}
      />
      <Text style={styles.mainText}>Раді бачити вас знову!)</Text>
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
      <View style={styles.button}>
        <TouchableOpacity onPress={handleSubmit(handlerLogin)}>
          <Text style={styles.buttonText}>GO IT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    color: colors.inputText,
    backgroundColor: colors.inputs,
    marginHorizontal: '13%',
    borderRadius: 8,
    paddingVertical: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.inputText,
    fontFamily: 'RussoOne-Regular',
  },
  mainText: {
    color: colors.primaryText,
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 30,
    fontFamily: 'RussoOne-Regular',
    marginHorizontal: '13%',
    textAlign: 'center',
    marginBottom: 50,
  },
  BackArrow: {
    top: 10,
  },
  image: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
