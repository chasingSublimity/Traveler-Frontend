import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


class LandingPage extends Component {

	componentDidMount() {
		const userNameInCookie = cookies.get('userName');
		if (!userNameInCookie) {
			// redirect
			console.log('redirect here');
		} else {
			this.props.dispatch(actions.setUserNameFromCookie(userNameInCookie));
		}
	}

	render() {
		return (
			<div>
				<p>Look at this fancy-ass landing page!</p>
			</div>
		);
	}
}

export default connect()(LandingPage);