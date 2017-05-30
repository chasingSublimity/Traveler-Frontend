import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import '../css/TripCreateForm.css';
import RaisedButton from 'material-ui/RaisedButton';
import {TextField, DatePicker} from 'redux-form-material-ui';


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

			<Field required component={DatePicker} 
							locale="en-US"
							format={null}
							floatingLabelText="Begin Date"
							className="TripCreateForm-input" 
							id="beginDate"
							name="beginDate"
						/>
			<br/>

			<Field required component={DatePicker} 
							locale="en-US"
							format={null}
							floatingLabelText="End Date"
							className="TripCreateForm-input" 
							id="endDate"
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