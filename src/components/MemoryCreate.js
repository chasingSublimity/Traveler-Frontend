import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {reset} from 'redux-form';
import MemoryCreateForm from './MemoryCreateForm';
import ImageForm from './ImageForm';
import Snackbar from 'material-ui/Snackbar';
import '../css/MemoryCreate.css';

class MemoryCreate extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
	}

	handleSubmit(values) {
		// adds memory to db
		this.props.dispatch(actions.submitMemoryCreateForm(values, this.props.newMemoryImageUrl));
		// reset form fields
		this.props.dispatch(reset('memoryCreate'));
	}

	handleRequestClose() {
		this.props.dispatch(actions.closeSnackbox());
	}

	render() {
		return (
			<div className="MemoryCreate">

				<p>Create a new memory!</p>
				<ImageForm />
				<MemoryCreateForm onSubmit={this.handleSubmit} />
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
	newMemoryImageUrl: state.main.newMemoryImageUrl,
	isSnackbarOpen: state.main.isSnackbarOpen,
	snackbarMessage: state.main.snackbarMessage
});

export default connect(mapStateToProps)(MemoryCreate);