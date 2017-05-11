import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import MemoryCreateForm from './MemoryCreateForm';
import ImageForm from './ImageForm';
import '../css/MemoryCreate.css';

class MemoryCreate extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		// adds memory to db
		this.props.dispatch(actions.submitMemoryCreateForm(values, this.props.newMemoryImageUrl));
	}

	render() {
		return (
			<div className="MemoryCreate">

				<p>Look at this fancy-ass form!</p>
				<ImageForm />
				<MemoryCreateForm onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	newMemoryImageUrl: state.main.newMemoryImageUrl,
});

export default connect(mapStateToProps)(MemoryCreate);