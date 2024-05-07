import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './screenFolder/Register/Register';
import Main from './layout/Main';
import Code from './screenFolder/Code';
import Login from './screenFolder/Login/index';
import {ContextRefetch} from './hook/context';

const Stack = createNativeStackNavigator();

export default function Btw() {
  // const [value, dispatch] = useReducer(reducer, initialState);

  const [refetch, setRefetch] = useState(1);
  return (
    <ContextRefetch.Provider value={[refetch, setRefetch]}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Code" component={Code} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </ContextRefetch.Provider>
  );
}
