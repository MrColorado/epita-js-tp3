import React from 'react';

import store from './store/index';
import App from './app';

import ReactDOM from "react-dom";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
