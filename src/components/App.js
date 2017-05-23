import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import * as actions from '../actions/index';

import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import injectTapEventPlugin from 'react-tap-event-plugin';

// handles onTap warning thrown by react
injectTapEventPlugin();

const cookies = new Cookies();

class App extends Component {
	constructor(props) {
		super(props);
		this.handleTouchTap = this.handleTouchTap.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
	}

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

	handleTouchTap(event) {
		// prevents ghost click
		event.preventDefault();
		// dispatch action to change popbarOpen boolean and anchor
		this.props.dispatch(actions.openAppBarPopover(event.currentTarget));
	}

	handleRequestClose(event) {
		// prevents ghost click
		event.preventDefault();
		// dispatch action to set isAppBarPopover open to false
		this.props.dispatch(actions.closeAppBarPopover());
	}
	
	render() {
		return (
			<div>
				<AppBar onLeftIconButtonTouchTap={this.handleTouchTap}
					title="TRAVELER"
				/>
				<Popover
					open={this.props.isAppBarPopoverOpen}
					anchorEl={this.props.popOverAnchor}
					anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
					targetOrigin={{horizontal: 'left', vertical: 'top'}}
					onRequestClose={this.handleRequestClose}
					canAutoPosition={false}
				>
					<Menu>
						<MenuItem primaryText="Home" />
						<MenuItem primaryText="Login" />
						<MenuItem primaryText="New User" />
						<MenuItem primaryText="New Trip" />
						<MenuItem primaryText="New Memory" />
						<MenuItem primaryText="Trips" />
					</Menu>
				</Popover>
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	isAppBarPopoverOpen: state.main.isAppBarPopoverOpen,
	popOverAnchor: state.main.popOverAnchor
});


export default connect(mapStateToProps)(App);