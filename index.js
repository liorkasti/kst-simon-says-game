/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/navigation';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/redux/store';

const store = configureStore();
console.log('store: ', store)

const myApp = () =>
    <Provider store={store}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => myApp);
