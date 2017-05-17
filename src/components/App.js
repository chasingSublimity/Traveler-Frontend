import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';

import * as actions from '../actions/index';

const cookies = new Cookies();


class App extends Component {

	componentDidMount() {
		const userNameInCookie = cookies.get('userName');
		if (!userNameInCookie) {
			// redirect
			console.log('redirect here');
		} else {
			console.log('cookie present');
			this.props.dispatch(actions.setUserNameFromCookie(userNameInCookie));
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