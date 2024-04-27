import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {store} from './store';
import Btw from './btw';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Btw />
      </Provider>
    </NavigationContainer>
  );
}
export default App;
