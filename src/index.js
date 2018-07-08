import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './css/index.css';
import 'antd/dist/antd.css';
import Root from './main/Root';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/create-store';

ReactDOM.render((
    <Root store={store} />
), document.getElementById('root'))
registerServiceWorker();