import {View} from 'react-native';
import React, {useState} from 'react';
import {useGetProductsQuery} from '../../store/server/server.fetch';
import ProductsList from '../../components/ProductsList';
import {IProducts} from '../../type/user';
import {Response} from '../../type/fetch';
import TogglePage from '../../components/TogglePage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import colors from '../../components/colors/colors'

const Products = ({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) => {
  const [page, setPage] = useState(1);
  const {data} = useGetProductsQuery(page) as Response<IProducts[]>;

  return (
    <View style = {{backgroundColor:colors.primary}}>
      <ProductsList list={data} navigation={navigation} />
      <TogglePage page={page} setPage={setPage} />
    </View>
  );
};
export default Products;
