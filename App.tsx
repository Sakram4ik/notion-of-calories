import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screenFolder/Home';
import Products from './screenFolder/Products';
import Register from './screenFolder/Register';
import {Provider} from 'react-redux';
import {store} from './store';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
