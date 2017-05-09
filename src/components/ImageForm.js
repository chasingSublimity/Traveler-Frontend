import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import '../css/MemoryCreateForm.css';


class ImageForm extends Component {

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="ImageForm" action="https://traveler-images.s3.amazonaws.com/" method="post">

				<input type="hidden" name="key" value="uploads/${filename}"/>
				<input type="hidden" name="AWSAccessKeyId" value="YOUR_AWS_ACCESS_KEY"/> 
				<input type="hidden" name="acl" value="private"/> 
				<input type="hidden" name="success_action_redirect" value="http://localhost/"/>
				<input type="hidden" name="policy" value="YOUR_POLICY_DOCUMENT_BASE64_ENCODED"/>
				<input type="hidden" name="signature" value="YOUR_CALCULATED_SIGNATURE"/>
				<input type="hidden" name="Content-Type" value="image/jpeg"/>
				<label htmlFor="image">Image: </label>
				<Field component="input" className="ImageField" id="image" type="file" accept="image/*" capture="camera" name="image"/>

				<input type="submit" value="Submit"/>
			</form>
		); 
	}
}

ImageForm = reduxForm({
	form: 'memoryCreate'
})(ImageForm);

export default ImageForm;