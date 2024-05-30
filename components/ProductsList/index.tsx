import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import {IProducts} from '../../type/user';

import {NavigationProp, ParamListBase} from '@react-navigation/native';

import colors from '../colors/colors';

interface ProductsListProps {
  list: IProducts[] | undefined;
  navigation: NavigationProp<ParamListBase>;
}
const ProductsList: React.FC<ProductsListProps> = ({list, navigation}) => {
  const handlerProduct = async (id: string) => {
    navigation.navigate('Product', {id});
  };
  return (
    <SafeAreaView style={{width: 400, height: '85%', backgroundColor:colors.primary}}>
      {list ? (
        <ScrollView>
          {list.map(element => (
            <TouchableOpacity
              onPress={() => handlerProduct(element.id)}
              key={element.id}>
                <View style = {styles.block}>
                  <Image
                    source={{uri: element.img}}
                    style={styles.image}
                  />
                  <View style={{ flex:1, flexWrap: 'wrap' }}>
                    <Text style={styles.mainText}>{element.name}</Text>
                  </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainText:{
    color: colors.primaryText,
    fontSize:24,
    marginHorizontal:"auto",
    alignSelf:"center",
    fontFamily: 'Ubuntu-Medium',
    flexWrap:"wrap",
    textAlign:"center",
    width:'100%'
  },
  block:{
  flexDirection:'row',
  justifyContent:"flex-start",
  marginHorizontal:20,
  marginVertical:5,
  alignItems:"center",
  },
  image:{
    width: 170, 
    height: 170,
    borderRadius:10
  },
})
export default ProductsList;
