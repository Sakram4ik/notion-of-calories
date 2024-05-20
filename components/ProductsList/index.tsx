import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {IProducts} from '../../type/user';

interface ProductsListProps {
  list: IProducts[] | undefined;
}
const ProductsList: React.FC<ProductsListProps> = ({list}) => {
  return (
    <SafeAreaView style={{width: 400, height: 400}}>
      {list ? (
        <ScrollView>
          {list.map(element => (
            <TouchableOpacity key={element.id}>
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
