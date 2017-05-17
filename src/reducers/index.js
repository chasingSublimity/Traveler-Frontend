import * as actions from '../actions/index';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const initialState = {
	newMemoryImageUrl: '',
	userName: '',
	trips: []
};


const mainReducer = (state=initialState, action) => {
	let newState = {};

	switch (action.type) {

	case actions.SUBMIT_IMG_URL_SUCCESS:
		newState = Object.assign({}, state, {newMemoryImageUrl: action.value});
		return newState;

	case actions.ATTEMPT_LOGIN_SUCCESS:
		newState = Object.assign({}, state, {userName: action.value});
		return newState;

	case actions.LOAD_TRIP_VIEW_PAGE_SUCCESS:
		newState = Object.assign({}, state, {trips: action.value});
		return newState;

	case actions.SET_USERNAME_FROM_COOKIE:
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
