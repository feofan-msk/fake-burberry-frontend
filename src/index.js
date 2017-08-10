import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import 'normalize.css'
import 'flexboxgrid2'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
