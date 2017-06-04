import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
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
				<RaisedButton primary={true} label="Submit" type="submit" />
				<div>
					<p>
						<span>Want to see a demo?</span>
						<br/>
						<span>Username: WhereAmI</span>
						<br/>
						<span>Password: NotHereOrThere</span>
					</p>
				</div>
				<CircularProgress style={{display: this.props.progressSpinnerDisplayProp}} />
			</form>
		); 
	}
}

LoginForm = reduxForm({
	form: 'loginForm'
})(LoginForm);

const mapStateToProps = (state, props) => ({
	progressSpinnerDisplayProp: state.main.progressSpinnerDisplayProp,
});


export default connect(mapStateToProps)(LoginForm);