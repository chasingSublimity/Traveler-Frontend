import React from 'react';
import ReactDOM from 'react-dom';
import UserCreateForm from '../components/UserCreateForm';
import {Provider} from 'react-redux';
import {shallow} from 'enzyme';

import store from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
		<Provider store={store}>
			<UserCreateForm />
		</Provider>, div);
});

// describe('UserCreateForm', () => {
// 	it.only('smoke test', () => {
// 		expect(shallow(<UserCreateForm />));
// 	});
// });