import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import './css/index.css';

import App from './components/App';


ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
