import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {AutoComplete as MUIAutoComplete} from 'material-ui/';
import RaisedButton from 'material-ui/RaisedButton';
import {TextField, AutoComplete} from 'redux-form-material-ui';

import '../css/MemoryCreateForm.css';

class MemoryCreateForm extends Component {

	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="MemoryCreateForm-form" action="" method="post">
				
				<Field required component={AutoComplete} 
								floatingLabelText="Location"
								className="MemoryCreateForm-input" 
								id="location"
								type="text"
								name="location"
								filter={MUIAutoComplete.fuzzyFilter}
								dataSource={['Fort Worth', 'Lubbock', 'Dallas', 'Houston']}
							/>
				<br/>
				
				<Field required component={TextField} 
								floatingLabelText="Date" 
								className="MemoryCreateForm-input" 
								id="date" 
								type="text" 
								name="date"/>
				<br/>				
				<Field component={TextField} 
								floatingLabelText="Comments" 
								className="MemoryCreateForm-input" 
								id="comments" 
								type="text" 
								name="comments"/>
				
				<br/>
				<RaisedButton label="Submit" type="submit" />
			</form>
		); 
	}
}

MemoryCreateForm = reduxForm({
	form: 'memoryCreate'
})(MemoryCreateForm);

export default MemoryCreateForm;