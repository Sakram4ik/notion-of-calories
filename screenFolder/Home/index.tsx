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
      {UserInfo ? (
        <View>
          <Text>{UserInfo.email}</Text>
        </View>
      ) : (
        <View>
          <Button title="Go to Register" onPress={() => handler()} />
          <Button title="Go to Login" onPress={() => handlerLogin()} />
        </View>
      )}
    </View>
  );
};

export default Home;
