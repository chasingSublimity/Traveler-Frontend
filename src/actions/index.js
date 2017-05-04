import React from 'react';
import axios from 'axios';

// change API Key form input
export const CHANGE_USER_SUBMIT_FORM = 'CHANGE_USER_SUBMIT_FORM';
export const changeApiKeyInput = value =>({
	type: CHANGE_USER_SUBMIT_FORM, 
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