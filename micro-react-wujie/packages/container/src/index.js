import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';
import './index.css';
import WujieReact from 'wujie-react';

ReactDOM.render(
  <>
    <App />
    <WujieReact
      width="100%"
      height="100%"
      name="browser"
      url={'http://localhost:3001/'}
    />
  </>,
  document.getElementById('root'),
);
unregister();
