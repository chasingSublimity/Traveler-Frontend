import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import TripCreateForm from './TripCreateForm';
import '../css/TripCreate.css';

class TripCreate extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		this.props.dispatch(actions.submitTripCreateForm(values));
	}

	render() {
		return (
			<div className="TripCreate">
				<p>Look at this fancy-ass form!</p>
				<TripCreateForm onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

// const mapStateToProps = (state, props) => ({

// });

export default connect()(TripCreate);