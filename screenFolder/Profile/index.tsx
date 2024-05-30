import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import colors from '../../components/colors/colors.tsx'

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
    <ScrollView style = {styles.block}>
      <Text style = {styles.mainText}>dinner</Text>
      {data ? <ProfileProduct product={data.dinner} /> : <></>}
      <Text style = {styles.mainText}>lunch</Text>
      {data ? <ProfileProduct product={data.lunch} /> : <></>}
      <Text style = {styles.mainText}>breakfast</Text>
      {data ? <ProfileProduct product={data.breakfast} /> : <></>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block:{
    backgroundColor:colors.primary,
    flex:1
  },
  mainText:{
    color:colors.primaryText,
    fontSize:35,
    fontFamily: 'Ubuntu-Medium',
    alignSelf:"center",
    marginVertical:10
  },
  arrow:{
    marginTop:15,
    marginBottom:-20,
    marginLeft:20
  },
  image:{
    width:40,
    height:40,
    marginTop:15,
    marginBottom:-20,
    marginRight:20
  }
})
export default Profile;
