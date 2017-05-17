import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import './css/index.css';

import App from './components/App';
import {routes} from './components/Routes.js';


ReactDOM.render(
	<Provider store={store}>
		<App>
			{routes}
		</App>
  </Provider>,
  document.getElementById('root')
);
