import React from 'react';
import ReactDOM from 'react-dom';
import TripCreate from '../components/TripCreate';
import {Provider} from 'react-redux';

import store from '../store';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={store}>
			<TripCreate />
		</Provider>, div);
});
