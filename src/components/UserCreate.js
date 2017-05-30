import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import * as actions from '../actions/index';
import UserCreateForm from './UserCreateForm';
import Snackbar from 'material-ui/Snackbar';
import '../css/UserCreate.css';

class UserCreate extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
	}

	handleSubmit(values) {
		this.props.dispatch(actions.submitUserCreateForm(values));
		this.props.dispatch(reset('userCreate'));
	}

	handleRequestClose() {
		this.props.dispatch(actions.closeSnackbox());
	}

	render() {
		return (
			<div className="UserCreate">
				<h3>Create a new user!</h3>
				<UserCreateForm onSubmit={this.handleSubmit}/>
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

export default connect(mapStateToProps)(UserCreate);