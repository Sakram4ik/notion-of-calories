import {Button, Text, View} from 'react-native';
import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {ContextUser} from '../../hook/context';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const handler = () => {
    navigation.navigate('Register');
  };
  // const [initialState] = useContext(ContextUser);
  async function test() {
    console.log(await AsyncStorage.getItem('token'));
  }
  const storedToken = {
    token: `${AsyncStorage.getItem('token')}`,
  };
  test();
  return (
    <View>
      <Button title="Go it " onPress={() => handler()} />
      <Text>{storedToken.token}gggggggfffghhh</Text>
    </View>
  );
};
export default Home;
