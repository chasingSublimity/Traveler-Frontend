import axios from 'axios';

// send user creation post request to API
export const submitUserCreateForm = userData => dispatch => {
	const url = 'http://localhost:8080/users';
	return axios.post(url, userData)
		.then(response => {
		console.log(response);
		});
};

// fired after user is successfully created
export const SUBMIT_USER_CREATE_FORM_SUCCESS = 'SUBMIT_USER_CREATE_FORM_SUCCESS';
export const submitUserCreateFormSuccess = value =>({
	type: SUBMIT_USER_CREATE_FORM_SUCCESS,
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

// fired after trip is successfully created
export const SUBMIT_TRIP_CREATE_FORM_SUCCESS = 'SUBMIT_TRIP_CREATE_FORM_SUCCESS';
export const submitTripCreateFormSuccess = value => ({
	type: SUBMIT_TRIP_CREATE_FORM_SUCCESS,
	value
});

export const LOAD_TRIP_VIEW_PAGE_SUCCESS = 'LOAD_TRIP_VIEW_PAGE_SUCCESS';
export const loadTripViewPageSuccess = value => ({
	type: LOAD_TRIP_VIEW_PAGE_SUCCESS,
	value
});

export const loadTripViewPage = userName => (dispatch, getState) => {
	console.log('userName: ', userName);
	const serverUrl = `http://localhost:8080/trips?userName=${userName}`;
	return axios.get(serverUrl)
		.then(response => {
			console.log('success');
			dispatch(loadTripViewPageSuccess(response.data.trips));
		});
};

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

// fired after trip is successfully created
export const SUBMIT_MEMORY_CREATE_FORM_SUCCESS = 'SUBMIT_MEMORY_CREATE_FORM_SUCCESS';
export const submitMemoryCreateFormSuccess = value =>({
	type: SUBMIT_MEMORY_CREATE_FORM_SUCCESS,
	value
});

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
			dispatch(attemptLoginSuccess(userName));
		}).catch(err => {
			console.log(err);
		});
};


// I'll save these and refactor for form submissions later

// export const submitGroup = (groupName, groupId) => (dispatch, getState) => {
// 	const {apiKey} = getState();
// 	const {spinnerStopped} = getState();
// 	return getMessages(groupId, apiKey).then(messages => {
// 		const userSwearCount = swearCounter(messages);
// 																																								// return toggled boolean
// 		return dispatch(submitGroupChoiceSuccess(groupName, groupId, userSwearCount, !spinnerStopped));
// 	});
// };

// select group
// export const SUBMIT_GROUP_CHOICE_FORM_SUCCESS = 'SUBMIT_GROUP_CHOICE_FORM_SUCCESS';
// export const submitGroupChoiceSuccess = (groupName, groupId, userSwearCount, spinnerStopped) => ({
// 	type: SUBMIT_GROUP_CHOICE_FORM_SUCCESS, 
// 	groupName,
// 	groupId,
// 	userSwearCount,
// 	spinnerStopped
// });