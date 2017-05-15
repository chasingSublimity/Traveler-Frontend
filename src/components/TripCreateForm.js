import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import '../css/TripCreateForm.css';


class TripCreateForm extends Component {

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="TripCreateForm-form" action="" method="post">			
				<label htmlFor="origin">Origin:</label>
				<Field component="input" className="TripCreateForm-input" id="origin" type="text" name="origin"/>
				<label htmlFor="destination">Destination:</label>
				<Field component="input" className="TripCreateForm-input" id="destination" type="text" name="destination"/>
				<label htmlFor="beginDate">Begin Date:</label>
				<Field component="input" className="TripCreateForm-input" id="beginDate" type="text" name="beginDate"/>
				<label htmlFor="endDate">End Date:</label>
				<Field component="input" className="TripCreateForm-input" id="endDate" type="text" name="endDate"/>
				<input type="submit" value="Submit"/>
			</form>
		); 
	}
}

TripCreateForm = reduxForm({
	form: 'tripCreate'
})(TripCreateForm);

export default TripCreateForm;