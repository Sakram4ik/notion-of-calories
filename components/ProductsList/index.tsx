import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {IProducts} from '../../type/user';

import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface ProductsListProps {
  list: IProducts[] | undefined;
  navigation: NavigationProp<ParamListBase>;
}
const ProductsList: React.FC<ProductsListProps> = ({list, navigation}) => {
  const handlerProduct = async (id: string) => {
    navigation.navigate('Product', {id});
  };
  return (
    <SafeAreaView style={{width: 400, height: 400}}>
      {list ? (
        <ScrollView>
          {list.map(element => (
            <TouchableOpacity
              onPress={() => handlerProduct(element.id)}
              key={element.id}>
              <Image
                source={{uri: element.img}}
                style={{width: 40, height: 40}}
              />
              <Text>{element.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};
export default ProductsList;
