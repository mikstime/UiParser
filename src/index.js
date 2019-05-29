import React from 'react';
import ReactDOM from 'react-dom';
import './StartPage/index.css';
import App from './StartPage/App';
import * as serviceWorker from './ModuleUi/serviceWorker';

import { Provider } from "react-redux";
import store from "./reduxLogic/store";
const { ipcRenderer } = window.require('electron');

ipcRenderer.send('ui-config-request', 'TestModule');
ipcRenderer.once('ui-config-reply', function(event, args) {

    ReactDOM.render(
        <Provider store={store}>
            <App descriptor={args}/>
        </Provider>,
        document.getElementById('root'));
    serviceWorker.unregister();
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

