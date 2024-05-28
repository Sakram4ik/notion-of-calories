import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useRegisterUserMutation} from '../../store/server/server.fetch';
import {IRegister, IToken} from '../../type/user';
import {useForm} from 'react-hook-form';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import InputApp from '../../components/Imput';
import {registerData} from './RegisterData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Response} from '../../type/fetch';
import colors from '../../components/colors/colors';
import LoginButton from '../../components/MainButton/aproveButton';
import BackButton from '../../components/backButton/backButton';

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
      setErrorMessage(register.error.data.message);
    }
  };

  return (
    <View style={styles.block}>
      <BackButton />
      <Image
        style={styles.image}
        source={require('../../components/Image/CapybaraLoaderIcon.png')}
      />
      <Text style={styles.mainText}>
        Ласкаво просимо! Розпочнімо реєстрацію!
      </Text>
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
      {/* <Button title="Go it " onPress={handleSubmit(handlerRegister)} />
      <LoginButton onPress={() =>handleSubmit(handlerRegister)}/> */}
      <View style={styles.button}>
        <TouchableOpacity onPress={handleSubmit(handlerRegister)}>
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
  image: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
