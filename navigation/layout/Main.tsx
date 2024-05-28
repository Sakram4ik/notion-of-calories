import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screenFolder/Home';
import {StyleSheet, View} from 'react-native';

import NavigationFooter from '../../components/NavigationFooter';
import useGetUser from '../../hook/useGetUser';
import {ContextUser} from '../../hook/context';

import Product from '../../screenFolder/Product';
import Products from '../../screenFolder/Products';

const Stack = createNativeStackNavigator();

export default function Main() {
  // const [UserInfo, setUserInfo] = useState<any>('');

  const [UserInfo, setUserInfo] = useGetUser();
  useEffect(() => {
    // setUserInfo(userData);
    console.log(UserInfo);
  }, [UserInfo]);

  return (
    <View style={styles.container}>
      <ContextUser.Provider value={[UserInfo, setUserInfo]}>
        {/* <Header /> */}
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
        <NavigationFooter />
      </ContextUser.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'skyblue',
  },
});
