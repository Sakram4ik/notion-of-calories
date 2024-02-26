import {Button} from 'react-native';
import React from 'react';
const Home = ({navigation}: any) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
    />
  );
};
export default Home;
