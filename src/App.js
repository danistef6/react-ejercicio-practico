import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './createStore';

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default App;
