import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {AutoComplete as MUIAutoComplete} from 'material-ui/';
import RaisedButton from 'material-ui/RaisedButton';
import {TextField, AutoComplete, DatePicker} from 'redux-form-material-ui';

import cityNames from '../helperFunctions/cities';
import '../css/MemoryCreateForm.css';

class MemoryCreateForm extends Component {
	render() {
		const {handleSubmit} = this.props;
		return (
			<form onSubmit={handleSubmit} className="MemoryCreateForm-form" action="" method="post">
				
				<Field required component={AutoComplete} 
								floatingLabelText="Location (City, State/Region)"
								className="MemoryCreateForm-input" 
								id="location"
								type="text"
								name="location"
								filter={MUIAutoComplete.fuzzyFilter}
								dataSource={cityNames}
							/>
				<br/>
				
				<Field required component={DatePicker} 
								locale="en-US"
								format={null}
								floatingLabelText="Date" 
								className="MemoryCreateForm-input" 
								id="date" 
								name="date"/>
				<br/>				
				<Field component={TextField} 
								floatingLabelText="Comments" 
								className="comments" 
								id="comments" 
								type="text" 
								name="comments"/>
				
				<br/>
				<RaisedButton className="submit-button" primary={true} disabled={this.props.isButtonDisabled} label="Submit" type="submit" />
			</form>
		); 
	}
}

MemoryCreateForm = reduxForm({
	form: 'memoryCreate'
})(MemoryCreateForm);

const mapStateToProps = (state, props) => ({
	isButtonDisabled: state.main.isButtonDisabled
});

export default connect(mapStateToProps)(MemoryCreateForm);