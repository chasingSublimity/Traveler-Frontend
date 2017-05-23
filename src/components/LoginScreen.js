import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import LoginForm from './LoginForm';
import * as actions from '../actions/index';

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		console.log(values);
		this.props.dispatch(actions.attemptLogin(values));
		this.props.dispatch(reset('loginForm'));
	}

	render() {
		return (
			<div className="LoginScreen">

				<p>Login below to get started!</p>
				<LoginForm onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	// userName: state.form.fields.userName,
	// password: state.form.fields.password,
});

export default connect(mapStateToProps)(LoginScreen);