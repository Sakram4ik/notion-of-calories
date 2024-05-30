import {RouteProp, useRoute} from '@react-navigation/native';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Response, RootStackParamList} from '../../type/fetch';
import {
  useAddProductMutation,
  useGetProductQuery,
} from '../../store/server/server.fetch';
import React from 'react';
import {IProducts} from '../../type/user';
import {useContext, useState} from 'react';
import ProductData from './ProductData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ContextRefetch, ContextUser} from '../../hook/context';

import colors from '../../components/colors/colors'

type ProductRouteProp = RouteProp<RootStackParamList, 'Product'>;
export default function Product() {
  const [addProduct] = useAddProductMutation();
  const [UserInfo] = useContext(ContextUser);
  const [timeFood, setTimeFood] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [refetch, setRefetch] = useContext(ContextRefetch);
  const route = useRoute<ProductRouteProp>();
  const handlerTime = (time: string) => {
    setTimeFood(time);
  };
  const {id} = route.params;
  const {data} = useGetProductQuery(id) as Response<IProducts>;
  const handlerAddProduct = async () => {
    const token = await AsyncStorage.getItem('userToken');
    console.log(token);
    const currentDate = new Date();
    const currentDay = currentDate.getDate().toString();

    if (
      timeFood === 'dinner' &&
      UserInfo.dinnerCalories + data?.calories > 600 &&
      UserInfo.dinnerDay === currentDay
    ) {
      console.log('aaaaaaa');
      setErrorMessage('too many calories');
      return;
    }
    if (
      timeFood === 'lunch' &&
      UserInfo.lunchCalories + data?.calories > 600 &&
      UserInfo.lunchDay === currentDay
    ) {
      setErrorMessage('too many calories');
      return;
    }
    if (
      timeFood === 'breakfast' &&
      UserInfo.breakfastCalories + data?.calories > 600 &&
      UserInfo.breakfastDay === currentDay
    ) {
      console.log(UserInfo.breakfastCalories + data?.calories);
      setErrorMessage('too many calories');
      return;
    }
    const value = {
      token: token,
      id: id,
      mealTime: timeFood,
      calorie: data?.calories,
    };
    const add = (await addProduct(value)) as Response<string>;

    if (add.data) {
      setRefetch(refetch + 1);
      console.log('dddddhhh');
    }
    if (add.error) {
      setRefetch(refetch + 1);
      console.log('dddddhhggh');
      console.log(add.error);
    }
  };

  return (
    <ScrollView style = {{backgroundColor:colors.primary}}>
      <Text style = {styles.headerText}>{data?.name}</Text>
      {data ? (
        <Image source={{uri: data?.img}} style={{width: 400, height: 400}} />
      )
       : (
        <></>
      )}
      <View style ={{flexDirection:"row"}}>
      {ProductData.map((element: string) => (
          <TouchableOpacity
            onPress={() => handlerTime(element)}
            key={element}
            style={styles.button}>
            <Text style = {styles.buttonText}>{element}</Text>
          </TouchableOpacity>
      ))}
      </View>
      <Text style = {styles.description}>{data?.description}</Text>
      <TouchableOpacity onPress={() => {
          handlerAddProduct();}}>
            <Text style = {styles.buttonAdd}>Add</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.inputs,
    marginHorizontal: 5,
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 25,
    width:"31%",
    alignItems:"center",
  },
  buttonText:{
    fontSize:18,
    color: colors.inputText,
  },
  headerText:{
    color: colors.inputText,
    fontSize:35,
    marginHorizontal:10,
    alignSelf:"center",
    textAlign:"center",
    marginVertical:15,
    fontFamily: 'RussoOne-Regular',
    fontWeight:'700',
  },
  description:{
    color:colors.inputText,
    fontFamily: 'Ubuntu-Medium',
    fontWeight:'600',
    fontSize:18,
    marginHorizontal:10,
    marginVertical:15

  },
  buttonAdd:{
    color: colors.inputText,
    backgroundColor:'#5D3587',
    paddingVertical:20,
    textAlign:"center",
    fontFamily: 'RussoOne-Regular',
    fontWeight:'700',
    fontSize:20,
    borderRadius:10,
    width:"50%",
    alignSelf:"center"
  },
});
