import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import Snackbar from 'material-ui/Snackbar';
import uploadImageToS3 from '../helperFunctions/uploadImageToS3';

import * as actions from '../actions/index';


class ImageForm extends Component {
	constructor(props) {
		super(props);
		this.handleDrop = this.handleDrop.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
	}

	handleRequestClose() {
		this.props.dispatch(actions.closeSnackbox());
	}


	// uploads the img to s3 via helper function
	// and adds the img url to the state (which is later sent to the database)
	handleDrop(files) {
		uploadImageToS3(files)
		.then(returnData => {
			// fire action which adds url to state
			this.props.dispatch(actions.submitImgUrlSuccess(returnData.config.url));
			// once the file has been uploaded, the form submission button is enabled.
			// This will prevent the user from submitting memories without images.
			this.props.dispatch(actions.toggleButton(this.props.isButtonDisabled));
			this.props.dispatch(actions.openSnackbox('Image ready to upload!'));
		})
		.catch(err => {
			console.log(err);
			this.props.dispatch(actions.openSnackbox('Whoops, something went wrong!'));
		});
	}

	render() {
		return (
			<div className="ImageFormWrapper">
				<Dropzone onDrop={this.handleDrop} 
									size={150}
									multiple={false}
									accept="image/*"
									>
					<div>
						Drop some shiz here!
					</div>
				</Dropzone>
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
	newMemoryImageUrl: state.newMemoryImageUrl,
	isButtonDisabled: state.main.isButtonDisabled,
	isSnackbarOpen: state.main.isSnackbarOpen,
	snackbarMessage: state.main.snackbarMessage
});

export default  connect(mapStateToProps)(ImageForm);