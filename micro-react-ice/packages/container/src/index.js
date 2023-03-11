import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';
import './index.css';
import { AppRouter, AppRoute } from '@ice/stark';

ReactDOM.render(
  <>
    <App />
    <AppRouter>
      <AppRoute
        activePath="/browser"
        title="browse"
        url={[
          '//localhost:3001/static/js/bundle.js',
          '//localhost:3001/static/js/0.chunk.js',
          '//localhost:3001/static/js/main.chunk.js'
        ]}
      />
    </AppRouter>
  </>,
  document.getElementById('root'),
);
unregister();
