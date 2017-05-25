import * as actions from '../actions/index';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const initialState = {
	isAppBarPopoverOpen: false,
	isButtonDisabled: true,
	popOverAnchor: null,
	newMemoryImageUrl: '',
	userName: '',
	trips: [],
	selectedTrip: null,
	memories: [],
	selectedMemory: null,
	mapZoomLevel: 6,
	mapCenter: null
};


const mainReducer = (state=initialState, action) => {
	let newState = {};

	switch (action.type) {

	case actions.OPEN_APPBAR_POPOVER:
		newState = Object.assign({}, state, {isAppBarPopoverOpen: true}, {popOverAnchor: action.value});
		return newState;

	case actions.CLOSE_APPBAR_POPOVER:
		newState = Object.assign({}, state, {isAppBarPopoverOpen: false});
		return newState;

	case actions.SUBMIT_IMG_URL_SUCCESS:
		newState = Object.assign({}, state, {newMemoryImageUrl: action.value});
		return newState;

	case actions.TOGGLE_BUTTON:
		newState = Object.assign({}, state, {isButtonDisabled: !(action.value)});
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

	case actions.SELECT_TRIP_SUCCESS:
		newState = Object.assign({}, state, {selectedTripId: action.values.tripId}, {memories: action.values.memories});
		return newState;

	case actions.SET_ZOOM_LEVEL:
		newState = Object.assign({}, state, {mapZoomLevel: action.value});
		return newState;

	case actions.SET_MAP_CENTER:
		newState = Object.assign({}, state, {mapCenter: action.value});
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
