import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import uploadImageToS3 from '../helperFunctions/uploadImageToS3';

import * as actions from '../actions/index';


class ImageForm extends Component {
	constructor(props) {
		super(props);
		this.handleDrop = this.handleDrop.bind(this);
	}

	// uploads the img to s3 via helper function
	// and adds the img url to the state (which is later sent to the database)
	handleDrop(files) {
		uploadImageToS3(files)
		.then(returnData => {
			// fire action which adds url to state
			this.props.dispatch(actions.submitImgUrlSuccess(returnData.config.url));
		})
		.catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<Dropzone onDrop={this.handleDrop} size={150}>
				<div>
					Drop some shiz here!
				</div>
			</Dropzone>
		); 
	}
}

const mapStateToProps = (state, props) => ({
	newMemoryImageUrl: state.newMemoryImageUrl,
});

export default  connect(mapStateToProps)(ImageForm);