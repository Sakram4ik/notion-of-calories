import React from 'react';
import {IProducts} from '../../type/user';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import colors from '../colors/colors'

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
    <View >
      {product ? (
        <View style = {styles.block}>
          {product.map(element => (
            <TouchableOpacity style = {styles.tile}
             // onPress={() => handlerProduct(element.id)}
              key={element.id}>
              <Image
                source={{uri: element.img}}
                style = {styles.image}
              />
              <Text style = {styles.text}>{element.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block:{
   marginLeft:20,
  },
  image:{
    alignSelf:"center",
    width:150,
    height:150,
    margin:5,
    borderRadius:10
  },
  text:{
  color:colors.inputText,
  flexWrap:"wrap",
  flex:1,
  textAlign:"center",
  fontSize:16,
  marginRight:10
  },
  tile:{
    flexDirection:'row',  
     alignItems:"center",
     marginBottom:10
    },
})
export default ProfileProduct;
