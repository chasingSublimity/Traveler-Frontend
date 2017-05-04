import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import * as actions from '../actions/index';

const initialState = {
		firstname: '',
		lastName: '',
		userName: '',
		password: ''
};


const mainReducer = (state=initialState, action) => {
	let newState = {};

	// switch (action.type) {

	// }

	return state;
};

const reducers = {
	main: mainReducer,
	form: formReducer
};

export const reducer = combineReducers(reducers);
