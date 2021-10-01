import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigators/root';
import {store} from './src/redux/createStore';

const App = () => {
  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
};

export default App;