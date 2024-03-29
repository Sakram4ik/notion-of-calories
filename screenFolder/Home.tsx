import {Button, Text, View} from 'react-native';
import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const Home = ({navigation}: {navigation: NavigationProp<ParamListBase>}) => {
  const handler = () => {
    navigation.navigate('Register');
  };
  return (
    <View>
      <Button title="Go it " onPress={() => handler()} />
      <Text>home </Text>
    </View>
  );
};
export default Home;
