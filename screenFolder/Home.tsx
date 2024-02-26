import {Button} from 'react-native';
import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const handler = () => {
    navigation.navigate('Products');
  };
  return <Button title="Go it " onPress={() => handler()} />;
};
export default Home;
