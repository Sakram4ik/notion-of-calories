import {Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {useGetProductsQuery} from '../../store/server/server.fetch';
const Products = () => {
  const [page, setPage] = useState(1);
  const ProductList = useGetProductsQuery(page);
  console.log(ProductList);
  return (
    <View>
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
