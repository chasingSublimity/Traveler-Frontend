import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import * as actions from '../actions/index';
import TripCreateForm from './TripCreateForm';
import Snackbar from 'material-ui/Snackbar';
import '../css/TripCreate.css';

class TripCreate extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
	}

	handleSubmit(values) {
		this.props.dispatch(actions.submitTripCreateForm(values));
		// reset form fields
		this.props.dispatch(reset('tripCreate'));
	}

	handleRequestClose() {
		this.props.dispatch(actions.closeSnackbox());
	}


	render() {
		return (
			<div className="TripCreate">
				<p>Look at this fancy-ass form!</p>
				<TripCreateForm onSubmit={this.handleSubmit}/>
				<Snackbar
					open={this.props.isSnackbarOpen}
					message={this.props.snackbarMessage}
					autoHideDuration={3000}
					onRequestClose={this.handleRequestClose}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	isSnackbarOpen: state.main.isSnackbarOpen,
	snackbarMessage: state.main.snackbarMessage
});

export default connect(mapStateToProps)(TripCreate);