import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screenFolder/Register/Register';
import Main from './layout/Main';

import Login from '../screenFolder/Login/index';
import {ContextRefetch} from '../hook/context';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import color from '../components/colors/colors';
import {StatusBar} from 'react-native';
import Code from '../screenFolder/RegisterCode';

const Stack = createNativeStackNavigator();

export default function Btw() {
  // const [value, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const changeColor = async () => {
      try {
        const response = await changeNavigationBarColor(color.primary);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };

    changeColor();
  }, []);

  const [refetch, setRefetch] = useState(1);
  return (
    <ContextRefetch.Provider value={[refetch, setRefetch]}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      <StatusBar backgroundColor={color.primary} />
    </ContextRefetch.Provider>
  );
}
