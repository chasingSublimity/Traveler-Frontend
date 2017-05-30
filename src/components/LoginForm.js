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
				<div className="fields">
					<Field required component={TextField} 
									floatingLabelText="Username" 
									className="LoginForm-input" 
									id="userName" 
									type="text" 
									name="userName"/>
					<br/>		
					<Field required component={TextField} 
									floatingLabelText="Password" 
									className="LoginForm-input password" 
									id="password" 
									type="password" 
									name="password"/>
					<br/>	
				</div>
				<RaisedButton label="Submit" type="submit" />
				<div>
					<p>
						<span>Want to see a demo?</span>
						<br/>
						<span>Username: WhereAmI</span>
						<br/>
						<span>Password: NotHereOrThere</span>
					</p>
				</div>
			</form>
		); 
	}
}

LoginForm = reduxForm({
	form: 'loginForm'
})(LoginForm);




export default LoginForm;