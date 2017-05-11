import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import * as actions from '../actions/index';


class ImageForm extends Component {
	constructor(props) {
		super(props);
		this.handleDrop = this.handleDrop.bind(this);
	}

	handleDrop(files) {
		const file = files[0];
		axios.get(`http://localhost:8080/awsUrl?filename=${file.name}&filetype=${file.type}`)
		.then(result => {
			console.log(result);
			const signedUrl = result.data.signedUrl;
			const options = {
				headers: {
					'Content-Type': file.type
				}
			};
			return axios.put(signedUrl, file, options);
		})
		.then(returnData => {
			console.log(returnData.config.url);
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

// ImageForm = reduxForm({
// 	form: 'memoryCreate'
// })(ImageForm);

const mapStateToProps = (state, props) => ({
	newMemoryImageUrl: state.newMemoryImageUrl,
});

export default  connect(mapStateToProps)(ImageForm);