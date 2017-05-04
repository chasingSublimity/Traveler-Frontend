import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import UserCreate from './components/UserCreate';
import './css/index.css';

ReactDOM.render(
  <UserCreate />,
  document.getElementById('root')
);
