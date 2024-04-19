import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../screenFolder/Products';
import Home from '../screenFolder/Home';
import {StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationFooter from '../components/NavigationFooter';
import {ContextUser} from '../hook/context';

import {useGetUserMutation} from '../store/server/server.fetch';
import {IToken} from '../type/user';
const Stack = createNativeStackNavigator();

export default function Main() {
  const [isToken, setToken] = useState('');

  const [initialState, setInitialState] = useState('');
  interface RegisterResponse {
    data?: any;
    error?: any;
  }
  const [getUser] = useGetUserMutation();

  const getUserHandler = async () => {
    console.log(await AsyncStorage.getItem('token'));
    const storedToken: IToken = {
      token: `${await AsyncStorage.getItem('token')}`,
    };
    if (storedToken !== null) {
      const {data, error}: RegisterResponse = await getUser(storedToken);
      console.log(data);
      if (data) {
        setInitialState(data);
      }
    }
  };
  getUserHandler();

  // const [value, dispatch] = useReducer(initialState, setInitialState);
  return (
    <View style={styles.container}>
      <ContextUser.Provider value={[initialState, setInitialState]}>
        <Stack.Navigator
          // style={styles.container}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>

        <NavigationFooter />
      </ContextUser.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'skyblue',
  },
});
