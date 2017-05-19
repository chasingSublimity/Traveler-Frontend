import React, { Component } from 'react';
import {connect} from 'react-redux';
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
	}

	render() {
		return (
			<div className="LoginScreen">

				<p>Look at this fancy-ass login form!</p>
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