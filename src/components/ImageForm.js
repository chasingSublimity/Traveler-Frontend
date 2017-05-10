import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import '../css/MemoryCreateForm.css';


class ImageForm extends Component {

	handleDrop(files) {
		const file = files[0];
		console.log(typeof file.name,typeof file.type);
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
		.then(result => {
			console.log(result);
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

export default ImageForm;