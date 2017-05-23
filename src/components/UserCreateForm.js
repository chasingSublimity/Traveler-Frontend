import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {TextField} from 'redux-form-material-ui';

import '../css/UserCreateForm.css';


class UserCreateForm extends Component {

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="UserCreateForm-form" action="" method="post">

				<Field component={TextField} 
								floatingLabelText="First Name" 
								className="UserCreateForm-input" 
								id="firstName" 
								type="text" 
								name="firstName"/>
				<br/>
				<Field component={TextField} 
								floatingLabelText="Last Name" 
								className="UserCreateForm-input" 
								id="lastName" 
								type="text" 
								name="lastName"/>
				<br/>
				<Field component={TextField} 
								floatingLabelText="Username" 
								className="UserCreateForm-input" 
								id="userName" 
								type="text" 
								name="userName"/>
				<br/>				
				<Field component={TextField} 
								floatingLabelText="Password" 
								className="UserCreateForm-input" 
								id="password" 
								type="text" 
								name="password"/>

				<br/>
				<RaisedButton label="Submit" type="submit" />
			</form>
		); 
	}
}

UserCreateForm = reduxForm({
	form: 'userCreate'
})(UserCreateForm);

export default UserCreateForm;