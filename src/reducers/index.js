import * as actions from '../actions/index';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const initialState = {
	newMemoryImageUrl: '',
	userName: ''
};


const mainReducer = (state=initialState, action) => {
	let newState = {};

	switch (action.type) {

	case actions.SUBMIT_IMG_URL_SUCCESS:
		newState = Object.assign({}, state, {newMemoryImageUrl: action.value});
		return newState;

	case actions.ATTEMPT_LOGIN_SUCCESS:
		console.log(action.value);
		newState = Object.assign({}, state, {userName: action.value});
		return newState;

	default:
		return state;
	}
};

const reducers = {
	main: mainReducer,
	form: formReducer
};

export const reducer = combineReducers(reducers);
