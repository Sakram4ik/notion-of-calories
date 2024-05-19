import {View} from 'react-native';
import React, {useState} from 'react';
import {useGetProductsQuery} from '../../store/server/server.fetch';
import ProductsList from '../../components/ProductsList';
import {IProducts} from '../../type/user';
import {Response} from '../../type/fetch';
import TogglePage from '../../components/TogglePage';

const Products = () => {
  const [page, setPage] = useState(1);
  const {data} = useGetProductsQuery(page) as Response<IProducts[]>;
  // console.log(ProductList.data);
  return (
    <View>
      <ProductsList list={data} />
      <TogglePage page={page} setPage={setPage} />
    </View>
  );
};
export default Products;
