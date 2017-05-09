import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import MemoryCreateForm from './MemoryCreateForm';
import '../css/MemoryCreate.css';

class MemoryCreate extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		this.props.dispatch(actions.submitMemoryCreateForm(values));
	}

	render() {
		return (
			<div className="MemoryCreate">
				<p>Look at this fancy-ass form!</p>
				<MemoryCreateForm onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

// const mapStateToProps = (state, props) => ({

// });

export default connect()(MemoryCreate);