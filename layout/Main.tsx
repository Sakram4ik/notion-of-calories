import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../screenFolder/Products';
import Home from '../screenFolder/Home';
import {StyleSheet, View} from 'react-native';

import NavigationFooter from '../components/NavigationFooter';
import useGetUser from '../hook/useGetUser';

const Stack = createNativeStackNavigator();

export default function Main() {
  const [UserInfo, setUserInfo] = useState<any>('');

  const data = useGetUser();
  useEffect(() => {
    setUserInfo(data);
    console.log(data);
  }, [data]);

  return (
    <View style={styles.container}>
      {/* <ContextUser.Provider > */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
      <NavigationFooter />
      {/* </ContextUser.Provider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'skyblue',
  },
});
