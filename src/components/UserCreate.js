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

				<div className="UserCreate-header">
					<h2>Traveler New-User Screen</h2>
				</div>

				<p className="UserCreate-intro">
					To get started, create a user below!
				</p>

				<UserCreateForm onSubmit={this.handleSubmit}/>

			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({

});

export default connect()(UserCreate);