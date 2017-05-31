import * as actions from '../actions/index';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import moment from 'moment';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const userNameInCookie = cookies.get('userName');
let loginLinkState;
if (userNameInCookie) {
	loginLinkState = 'Logout';
} else {
	loginLinkState = 'Login';
}

const initialState = {
	isAppBarPopoverOpen: false,
	isSnackbarOpen: false,
	snackbarMessage: '',
	progressSpinnerDisplayProp: 'none',
	isButtonDisabled: true,
	navbarLoginLinkText: loginLinkState,
	popOverAnchor: null,
	newMemoryImageUrl: '',
	userName: '',
	trips: [],
	today: moment().format('MM/DD/YYYY'),
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

	case actions.OPEN_SNACKBOX:
		newState = Object.assign({}, state, {isSnackbarOpen: true, snackbarMessage: action.value});
		return newState;				

	case actions.CLOSE_SNACKBOX:
		newState = Object.assign({}, state, {isSnackbarOpen: false, snackbarMessage: ''});
		return newState;

	case actions.TOGGLE_PROGRESS_SPINNER:
		newState = Object.assign({}, state, {progressSpinnerDisplayProp: action.value});
		return newState;

	case actions.SUBMIT_IMG_URL_SUCCESS:
		newState = Object.assign({}, state, {newMemoryImageUrl: action.value});
		return newState;

	case actions.TOGGLE_BUTTON:
		newState = Object.assign({}, state, {isButtonDisabled: !(action.value)});
		return newState;

	case actions.ATTEMPT_LOGIN_SUCCESS:
		newState = Object.assign({}, state, {userName: action.value, navbarLoginLinkText: 'Logout'});
		return newState;

	case actions.LOGOUT:
		newState = Object.assign({}, state, {navbarLoginLinkText: 'Login'});
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
