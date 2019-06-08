import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
axios.defaults.withCredentials = false  // enable axios post cookie, default false
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
serviceWorker.unregister();
