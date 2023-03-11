import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  registerMicroApps,
  runAfterFirstMounted,
  start,
  setDefaultMountApp,
} from 'qiankun';

ReactDOM.render(
  <>
    <App />
    <section id='container'/>
  </>,
  document.getElementById('root'),
);
// 注册子应用
registerMicroApps([
  {
    name: 'browser',
    entry: 'http://localhost:3001/',
    container: '#container',
    activeRule: '/browser',
  },
  {
    name: 'restaurant',
    entry: 'http://localhost:3002/',
    container: '#container',
    activeRule: '/restaurant',
  },
]);

setDefaultMountApp('browser');

// 启动应用
start();
