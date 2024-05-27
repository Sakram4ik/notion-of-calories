import {RouteProp, useRoute} from '@react-navigation/native';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Response, RootStackParamList} from '../../type/fetch';
import {
  useAddProductMutation,
  useGetProductQuery,
} from '../../store/server/server.fetch';
import {IProducts} from '../../type/user';
import {useState} from 'react';
import ProductData from './ProductData';
import AsyncStorage from '@react-native-async-storage/async-storage';
type ProductRouteProp = RouteProp<RootStackParamList, 'Product'>;
export default function Product() {
  const [addProduct] = useAddProductMutation();
  const [timeFood, setTimeFood] = useState('');
  const route = useRoute<ProductRouteProp>();
  const handlerTime = (time: string) => {
    setTimeFood(time);
  };
  const handlerAddProduct = async () => {
    const token = await AsyncStorage.getItem('userToken');
    console.log(token);
    const value = {
      token: token,
      id: id,
      mealTime: timeFood,
    };
    const add = (await addProduct(value)) as Response<string>;
    if (add.data) {
      console.log('dddddhhh');
    }
    if (add.error) {
      console.log('dddddhhggh');
      console.log(add.error)
    }
  };
  const {id} = route.params;
  const {data} = useGetProductQuery(id) as Response<IProducts>;
  console.log(id);
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
