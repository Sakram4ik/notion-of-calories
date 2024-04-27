import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './screenFolder/Register/Register';
import Main from './layout/Main';

const Stack = createNativeStackNavigator();

export default function Btw() {
  // const [value, dispatch] = useReducer(reducer, initialState);
  return (
    // <ContextUser.Provider value={[initialState, setInitialState]}>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
    // </ContextUser.Provider>
  );
}
