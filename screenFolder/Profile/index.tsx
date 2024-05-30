import {View, Text} from 'react-native';
import React from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';
import {Response, RootStackParamList} from '../../type/fetch';
import {IGetProductUser} from '../../type/user';
import {useGetProductsUserQuery} from '../../store/server/server.fetch';
import ProfileProduct from '../../components/profileProduct.ts';

type ProfileRouteProp = RouteProp<RootStackParamList, 'Profile'>;
const Profile = () => {
  const route = useRoute<ProfileRouteProp>();
  const {token} = route.params;
  console.log(token);
  const {data, error} = useGetProductsUserQuery(
    token,
  ) as Response<IGetProductUser>;
  console.log(data);
  console.log(error);
  return (
    <View>
      <Text>dinner</Text>
      {data ? <ProfileProduct product={data.dinner} /> : <></>}
      <Text>lunch</Text>
      {data ? <ProfileProduct product={data.lunch} /> : <></>}
      <Text>breakfast</Text>
      {data ? <ProfileProduct product={data.breakfast} /> : <></>}
    </View>
  );
};
export default Profile;
