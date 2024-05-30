import React from 'react';
import {IProducts} from '../../type/user';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface ProfileProductProps {
  product: IProducts[] | null | undefined;
//   navigation: NavigationProp<ParamListBase>;
}
const ProfileProduct: React.FC<ProfileProductProps> = ({
  product,
//   navigation,
}) => {
//   const handlerProduct = async (id: string) => {
//     navigation.navigate('Product', {id});
//   };
  return (
    <View>
      {product ? (
        <View>
          {product.map(element => (
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
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};
export default ProfileProduct;
