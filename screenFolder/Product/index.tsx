import {RouteProp, useRoute} from '@react-navigation/native';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IUserInfo, Response, RootStackParamList} from '../../type/fetch';
import {
  useAddProductMutation,
  useGetProductQuery,
} from '../../store/server/server.fetch';
import {IProducts} from '../../type/user';
import {useContext, useState} from 'react';
import ProductData from './ProductData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ContextRefetch, ContextUser} from '../../hook/context';
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
    <View>
      <Text>{data?.name}</Text>
      {ProductData.map((element: string) => (
        <TouchableOpacity
          onPress={() => handlerTime(element)}
          key={element}
          style={styles.button}>
          <Text>{element}</Text>
        </TouchableOpacity>
      ))}
      <Button
        title="add"
        onPress={() => {
          handlerAddProduct();
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    backgroundColor: 'red',
  },
});
