import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

let Main = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
