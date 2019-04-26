import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const { ipcRenderer } = window.require('electron');
//@TODO parse json data through server
//@TODO get rid of this

ipcRenderer.send('ui-config-request', 'TestModule');
ipcRenderer.once('ui-config-reply', function(event, args) {

    ReactDOM.render(<App descriptor={JSON.stringify(args)}/>,
        document.getElementById('root'));
    serviceWorker.unregister();
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

