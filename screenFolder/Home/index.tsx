import {Button, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ContextUser} from '../../hook/context';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const handler = () => {
    navigation.navigate('Register');
  };
  const handlerLogin = () => {
    navigation.navigate('Login');
  };
  const [UserInfo] = useContext(ContextUser);
  return (
    <View>
      <Button title="Go it " onPress={() => handler()} />
      <Button title="Go it " onPress={() => handlerLogin()} />
      <Text>{UserInfo.email}</Text>
    </View>
  );
};
export default Home;
