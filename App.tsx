import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Products from './components/Products';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Home"
          component={Home}
         
        />
        <Stack.Screen name="Profile" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
