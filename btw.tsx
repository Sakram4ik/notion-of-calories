import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './screenFolder/Register/Register';
import Main from './layout/Main';
const Stack = createNativeStackNavigator();

export default function Btw() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
