import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import '../css/UserCreateForm.css';


class UserCreateForm extends Component {

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="UserCreateForm-form" action="" method="post">
				<label htmlFor="firstName">First Name:</label>
				<Field component="input" className="UserCreateForm-input" id="firstName" type="text" name="firstName"/>
				<label htmlFor="lastName">Last Name:</label>
				<Field component="input" className="UserCreateForm-input" id="lastName" type="text" name="lastName"/>
				<label htmlFor="userName">Username:</label>
				<Field component="input" className="UserCreateForm-input" id="userName" type="text" name="userName"/>
				<label htmlFor="password">Password:</label>
				<Field component="input" className="UserCreateForm-input" id="password" type="text" name="password"/>
				<input type="submit" value="Submit"/>
			</form>
		); 
	}
}

UserCreateForm = reduxForm({
	form: 'userCreate'
})(UserCreateForm);

export default UserCreateForm;