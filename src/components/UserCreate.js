import React, { Component } from 'react';
import '../css/UserCreate.css';

class UserCreate extends Component {
	render() {
		return (
			<div className="UserCreate">

				<div className="UserCreate-header">
					<h2>Traveler New-User Screen</h2>
				</div>

				<p className="UserCreate-intro">
				To get started, create a user below!
				</p>

				<form className="UserCreate-form" action="" method="post">
					<label htmlFor="firstName">First Name:</label>
					<input className="UserCreate-input" id="firstName" type="text" name="firstName"/>
					<label htmlFor="lastName">Last Name:</label>
					<input className="UserCreate-input" id="lastName" type="text" name="lastName"/>
					<label htmlFor="userName">Username:</label>
					<input className="UserCreate-input" id="userName" type="text" name="userName"/>
					<label htmlFor="password">Password:</label>
					<input className="UserCreate-input" id="password" type="text" name="password"/>
					<input type="submit" value="Submit"/>
				</form>

			</div>
		);
	}
}

export default UserCreate;
