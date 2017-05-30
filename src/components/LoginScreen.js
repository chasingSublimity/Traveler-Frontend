import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import Snackbar from 'material-ui/Snackbar';
import LoginForm from './LoginForm';
import * as actions from '../actions/index';

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
	}

	handleSubmit(values) {
		this.props.dispatch(actions.attemptLogin(values));
		this.props.dispatch(reset('loginForm'));
	}

	handleRequestClose() {
		this.props.dispatch(actions.closeSnackbox());
	}

	render() {
		return (
			<div className="LoginScreen">

				<h3>Login below to get started!</h3>
				<LoginForm onSubmit={this.handleSubmit} />
				<Snackbar
					open={this.props.isSnackbarOpen}
					message={this.props.snackbarMessage}
					autoHideDuration={2000}
					onRequestClose={this.handleRequestClose}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	isSnackbarOpen: state.main.isSnackbarOpen,
	snackbarMessage: state.main.snackbarMessage,
});

export default connect(mapStateToProps)(LoginScreen);