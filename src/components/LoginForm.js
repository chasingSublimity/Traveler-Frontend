import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';


class LoginForm extends Component {

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="LoginForm-form" action="" method="post">
				<label htmlFor="userName">Username:</label>
				<Field component="input" className="LoginForm-input" id="userName" type="text" name="userName"/>

				<label htmlFor="password">Password:</label>
				<Field component="input" className="LoginForm-input" id="password" type="text" name="password"/>

				<input type="submit" value="Submit"/>
			</form>
		); 
	}
}

LoginForm = reduxForm({
	form: 'loginForm'
})(LoginForm);

export default LoginForm;