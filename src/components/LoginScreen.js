import React, { Component } from 'react';
import {connect} from 'react-redux';
// import * as actions from '../actions/index';
import LoginForm from './LoginForm';

class LoginScreen extends Component {

	handleSubmit(values) {
		console.log(values);
	}

	render() {
		return (
			<div className="LoginScreen">

				<p>Look at this fancy-ass login form!</p>
				<LoginForm onSubmit={this.handleSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	newMemoryImageUrl: state.main.newMemoryImageUrl,
});

export default connect(mapStateToProps)(LoginScreen);