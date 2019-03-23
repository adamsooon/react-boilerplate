import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss';
import "@babel/polyfill";

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

module.hot.accept();
