import React from 'react';
import {Image, Text, View} from 'react-native';
import {IProducts} from '../../type/user';
import {useGetProductsQuery} from '../../store/server/server.fetch';
import { Response } from '../../type/fetch';

const ProductsList = () => {
  const list = useGetProductsQuery(1) as Response<IProducts>;
  console.log(list.data);
  return (
    <View>
      {list.data ? (
        <View>
          {list.data.map(element => (
            <View key={element.id}>
              <Image
                source={{
                  uri: element.img,
                }}
              />
            </View>
          ))}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
export default ProductsList;
