import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import '../css/MemoryCreateForm.css';


class MemoryCreateForm extends Component {

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="MemoryCreateForm-form" action="" method="post">
				<label htmlFor="tripId">tripId:</label>
				<Field component="input" className="MemoryCreateForm-input" id="tripId" type="text" name="tripId"/>

				<label htmlFor="image">Image:</label>
				<Field component="input" className="MemoryCreateForm-input" id="image" type="file" accept="image/*" capture="camera" name="image"/>

				<label htmlFor="location">Location:</label>
				<Field component="input" className="MemoryCreateForm-input" id="location" type="text" name="location"/>

				<label htmlFor="date">Date:</label>
				<Field component="input" className="MemoryCreateForm-input" id="date" type="text" name="date"/>

				<label htmlFor="comments">Comments:</label>
				<Field component="input" className="MemoryCreateForm-input" id="comments" type="text" name="comments"/>
				
				<input type="submit" value="Submit"/>
			</form>
		); 
	}
}

MemoryCreateForm = reduxForm({
	form: 'memoryCreate'
})(MemoryCreateForm);

export default MemoryCreateForm;