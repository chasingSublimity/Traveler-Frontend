import axios from 'axios';


// send user creation post request to API
export const submitUserCreateForm = (userData) => (dispatch) => {
	const url = 'https://still-coast-98142.herokuapp.com/users';
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
export const submitTripCreateForm = (tripData) => (dispatch) => {
	const url = 'https://still-coast-98142.herokuapp.com/trips';
	return axios.post(url, tripData)
		.then(response => {
		console.log(response);
	});
};

// fired after trip is successfully created
export const SUBMIT_TRIP_CREATE_FORM_SUCCESS = 'SUBMIT_TRIP_CREATE_FORM_SUCCESS';
export const submitTripCreateFormSuccess = value =>({
	type: SUBMIT_TRIP_CREATE_FORM_SUCCESS,
	value
});

// send trip creation post request to API
export const submitMemoryCreateForm = (memoryData) => (dispatch) => {
	const url = 'https://still-coast-98142.herokuapp.com/memories';
	return axios.post(url, memoryData)
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