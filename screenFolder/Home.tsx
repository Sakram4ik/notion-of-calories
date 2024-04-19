import {Button, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ContextUser} from '../hook/context';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const handler = () => {
    navigation.navigate('Register');
  };
  const [initialState, setInitialState] = useContext(ContextUser);

  return (
    <View>
      <Button title="Go it " onPress={() => handler()} />
      <Text>{initialState}</Text>
    </View>
  );
};
export default Home;
