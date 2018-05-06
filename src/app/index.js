import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './component/App';
import '../css/style.css'

import createHistory from 'history/createHashHistory'
const history = createHistory()

render((
  <HashRouter history={history}>
    <App />
  </HashRouter>
), document.getElementById('app'));