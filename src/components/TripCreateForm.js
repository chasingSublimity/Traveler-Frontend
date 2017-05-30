import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import '../css/TripCreateForm.css';
import RaisedButton from 'material-ui/RaisedButton';
import {TextField} from 'redux-form-material-ui';


class TripCreateForm extends Component {

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="TripCreateForm-form" action="" method="post">			

			<Field required component={TextField} 
							floatingLabelText="Origin"
							className="TripCreateForm-input" 
							id="origin"
							type="text"
							name="origin"
						/>
			<br/>

			<Field required component={TextField} 
							floatingLabelText="Destination"
							className="TripCreateForm-input" 
							id="destination"
							type="text"
							name="destination"
						/>
			<br/>

			<Field required component={TextField} 
							floatingLabelText="Begin Date -- MM/DD/YYYY"
							className="TripCreateForm-input" 
							id="beginDate"
							type="text"
							name="beginDate"
						/>
			<br/>

			<Field required component={TextField} 
							floatingLabelText="End Date -- MM/DD/YYYY"
							className="TripCreateForm-input" 
							id="endDate"
							type="text"
							name="endDate"
						/>
			<br/>

				<RaisedButton className="submit-button" label="Submit" type="submit" />
			</form>
		); 
	}
}

TripCreateForm = reduxForm({
	form: 'tripCreate'
})(TripCreateForm);

export default TripCreateForm;