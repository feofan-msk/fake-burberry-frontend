/* eslint-disable react/jsx-filename-extension */
import 'normalize.css';
import 'flexboxgrid2/dist/flexboxgrid.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
