import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import * as actions from '../actions/index';

import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
// handles onTap warning thrown by react
injectTapEventPlugin();

const cookies = new Cookies();


class App extends Component {

	componentDidMount() {
		// if a cookie is present, save the value in the store for use communication 
		// with the server. If the cookie is undefined, the user is redirected to the login page.
		// Redirection is handled by router.
		const userNameInCookie = cookies.get('userName');
		if (userNameInCookie) {
			this.props.dispatch(actions.setUserNameFromCookie(userNameInCookie));
		}
		
		const tripIdInCookie = cookies.get('selectedTripId');
		if (tripIdInCookie) {
			this.props.dispatch(actions.selectTrip(tripIdInCookie));
		}
	}
	
	render() {
		return (

			<div>
				<AppBar
					title="TRAVELER"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
				{this.props.children}
			</div>
		);
	}
}

export default connect()(App);