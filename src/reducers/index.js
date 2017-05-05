// import * as actions from '../actions/index';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const initialState = {

};


const mainReducer = (state=initialState, action) => {
	// let newState = {};

	// switch (action.type) {

	// }

	return state;
};

const reducers = {
	main: mainReducer,
	form: formReducer
};

export const reducer = combineReducers(reducers);
