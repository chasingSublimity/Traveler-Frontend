import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import * as actions from '../actions/index';

const cookies = new Cookies();


class App extends Component {

	componentDidMount() {
		// if a cookie is present, save the value in the store for use communication 
		// with the server. If the cookie is undefined, the user is redirected to the login page.
		// Redirection is handled by router.
		const userNameInCookie = cookies.get('userName');
		if (userNameInCookie) {
			this.props.dispatch(actions.setUserNameFromCookie(userNameInCookie));
			console.log('cookie set in store');
		}
	}

	render() {
		return (
			<div>

				<div className="header">
					<h2 className="header-title">Traveler</h2>
				</div>

				{this.props.children}
					
			</div>
		);
	}
}

export default connect()(App);