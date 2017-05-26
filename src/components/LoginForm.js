import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {TextField} from 'redux-form-material-ui';

import '../css/LoginForm.css';

class LoginForm extends Component {

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="LoginForm-form" action="" method="post">

				<Field required component={TextField} 
								floatingLabelText="Username" 
								className="LoginForm-input" 
								id="userName" 
								type="text" 
								name="userName"/>
				<br/>		
				<Field required component={TextField} 
								floatingLabelText="Password" 
								className="LoginForm-input" 
								id="password" 
								type="text" 
								name="password"/>
				<br/>	
				<RaisedButton label="Submit" type="submit" />
			</form>
		); 
	}
}

LoginForm = reduxForm({
	form: 'loginForm'
})(LoginForm);




export default LoginForm;