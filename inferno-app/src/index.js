import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import React from  'react';
import ReactDOM from  'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7React from 'framework7-react';

Framework7.use(Framework7React);

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
)
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
