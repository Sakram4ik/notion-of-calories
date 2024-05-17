import {Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {useGetProductsQuery} from '../../store/server/server.fetch';
import ProductsList from '../../components/ProductsList';
import {IProducts} from '../../type/user';
import {Response} from '../../type/fetch';
const Products = () => {
  const [page, setPage] = useState(1);
  // const ProductList = useGetProductsQuery(page) as Response<IProducts>;
  // console.log(ProductList.data);
  return (
    <View>
      {/* {ProductList.data ? <ProductsList = /> : <></>} */}
      <ProductsList />
      <Button
        title="next page"
        onPress={() => {
          setPage(page + 1);
        }}
      />
    </View>
  );
};
export default Products;
