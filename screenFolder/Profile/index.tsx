import {View, Text} from 'react-native';
import React from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../type/fetch';

type ProfileRouteProp = RouteProp<RootStackParamList, 'Profile'>;
const Profile = () => {
  const route = useRoute<ProfileRouteProp>();
  const {token} = route.params;
  return (
    <View>
      <Text>{token}</Text>
    </View>
  );
};
export default Profile;
