import React from 'react';
import Home from './screenFolder/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Products from './screenFolder/Products';
import Register from './screenFolder/Register';
export default function Btw() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}
