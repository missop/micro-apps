import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { isInIcestark, setLibraryName } from '@ice/stark-app';

export function mount(props) {
  ReactDOM.render(<App/>, props.container);
}

export function unmount(props) {
  ReactDOM.unmountComponentAtNode(props.container);
}

// 注意：`setLibraryName` 的入参需要与 webpack 工程配置的 output.library 保持一致
setLibraryName('microApp');

if (!isInIcestark()) {
  ReactDOM.render(<App />, document.getElementById('container'));
}