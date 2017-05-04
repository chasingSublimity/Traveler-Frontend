import React, { Component } from 'react';
import UserCreateForm from './UserCreateForm';
import '../css/UserCreate.css';

class UserCreate extends Component {

	handleSubmit(values) {
		console.log(values);
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

export default UserCreate;
