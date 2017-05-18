import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// fired after user is successfully created
export const SUBMIT_USER_CREATE_FORM_SUCCESS = 'SUBMIT_USER_CREATE_FORM_SUCCESS';
export const submitUserCreateFormSuccess = value =>({
	type: SUBMIT_USER_CREATE_FORM_SUCCESS,
	value
});

// send user creation post request to API
export const submitUserCreateForm = userData => dispatch => {
	const url = 'http://localhost:8080/users';
	return axios.post(url, userData)
		.then(response => {
		console.log(response);
		});
};

// fired after trip is successfully created
export const SUBMIT_TRIP_CREATE_FORM_SUCCESS = 'SUBMIT_TRIP_CREATE_FORM_SUCCESS';
export const submitTripCreateFormSuccess = value => ({
	type: SUBMIT_TRIP_CREATE_FORM_SUCCESS,
	value
});

// send trip creation post request to API
export const submitTripCreateForm = tripData => (dispatch, getState) => {
	const serverUrl = 'http://localhost:8080/trips';
	const {userName} = (getState()).main;
	tripData.userName = userName;
	return axios.post(serverUrl, tripData)
		.then(response => {
			console.log(response);
		});
};

export const LOAD_TRIP_VIEW_PAGE_SUCCESS = 'LOAD_TRIP_VIEW_PAGE_SUCCESS';
export const loadTripViewPageSuccess = value => ({
	type: LOAD_TRIP_VIEW_PAGE_SUCCESS,
	value
});

export const loadTripViewPage = userName => (dispatch, getState) => {
	const serverUrl = `http://localhost:8080/trips?userName=${userName}`;
	return axios.get(serverUrl)
		.then(response => {
			dispatch(loadTripViewPageSuccess(response.data.trips));
		});
};

// fired after trip is successfully created
export const SUBMIT_MEMORY_CREATE_FORM_SUCCESS = 'SUBMIT_MEMORY_CREATE_FORM_SUCCESS';
export const submitMemoryCreateFormSuccess = value =>({
	type: SUBMIT_MEMORY_CREATE_FORM_SUCCESS,
	value
});

// send trip creation post request to API
export const submitMemoryCreateForm = (memoryData, newMemoryImageUrl) => (dispatch, getState) => {
	const serverUrl = 'http://localhost:8080/memories';
	// add imgUrl to memoryData
	memoryData.imgUrl = newMemoryImageUrl;
	console.log(memoryData);
	return axios.post(serverUrl, memoryData)
		.then(response => {
		console.log(response);
		});
};

export const SUBMIT_IMG_URL_SUCCESS = 'SUBMIT_IMG_URL_SUCCESS';
export const submitImgUrlSuccess = value => ({
	type: SUBMIT_IMG_URL_SUCCESS,
	value
});

// trigger redirect here
export const ATTEMPT_LOGIN_SUCCESS = 'ATTEMPT_LOGIN_SUCCESS';
export const attemptLoginSuccess = value => ({
	type: ATTEMPT_LOGIN_SUCCESS,
	value
});

export const attemptLogin = authData => (dispatch, getState) => {
	const url = 'http://localhost:8080/login';
	// submit user login data to server
	return axios.post(url, authData)
		.then(response => {
			const {userName} = (JSON.parse(response.config.data));
			// set cookie to userName data
			// this will be used to create a persistant log-in
			// and for redirects
			cookies.set('userName', userName, {path: '/'});
			dispatch(attemptLoginSuccess(userName));
		}).catch(err => {
			console.log(err);
		});
};

export const SET_USERNAME_FROM_COOKIE = 'SET_USERNAME_FROM_COOKIE';
export const setUserNameFromCookie = value => ({
	type: SET_USERNAME_FROM_COOKIE,
	value
});

export const SELECT_TRIP_SUCCESS = 'SELECT_TRIP_SUCCESS';
export const selectTripSuccess = values => ({
	type: SELECT_TRIP_SUCCESS,
	values
});

export const selectTrip = tripId => (dispatch) => {
	console.log('select trip fired with id: ', tripId);
	const url = `http://localhost:8080/trips/${tripId}`;
	return axios.get(url)
		.then(response => {
			console.log(response.data);
			const tripId = response.data.tripData.id;
			const memories = response.data.memories;
			// store array of memories in store and set selectedTrip id in store
			dispatch(selectTripSuccess({tripId, memories}));
		});
};