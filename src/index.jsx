//import 'assets/favicon.ico';
import 'file-loader?name=index.html!assets/index.html';
import 'assets/images.loader.js';
import 'assets/css.loader.js';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore } from 'stores/RootReducer';
import { component } from 'app/routes';



const store = configureStore(browserHistory, window.__initialState__);
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={component} />
    </Provider>,
    document.getElementById('root')
);
