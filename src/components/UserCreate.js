import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import UserCreateForm from './UserCreateForm';
import '../css/UserCreate.css';

class UserCreate extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		this.props.dispatch(actions.submitUserCreateForm(values));
	}

	render() {
		return (
			<div className="UserCreate">
				<p>Look at this fancy-ass form!</p>
				<UserCreateForm onSubmit={this.handleSubmit}/>
			</div>
		);
	}
}

// const mapStateToProps = (state, props) => ({

// });

export default connect()(UserCreate);