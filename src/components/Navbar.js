import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import '../css/Navbar.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// handles onTap warning thrown by react
injectTapEventPlugin();

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleTouchTap = this.handleTouchTap.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleTouchTap(event) {
		// prevents ghost click
		event.preventDefault();
		// dispatch action to change popbarOpen boolean and anchor
		this.props.dispatch(actions.openAppBarPopover(event.currentTarget));
	}

	handleRequestClose() {
		// dispatch action to set isAppBarPopover open to false
		this.props.dispatch(actions.closeAppBarPopover());
	}

	handleLogout() {
		this.handleRequestClose();
		if (this.props.navbarLoginLinkText === 'Logout') {
			this.props.dispatch(actions.logout);
			cookies.remove('userName');
			cookies.remove('selectedTripId');
		}
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
						<Link onClick={this.handleRequestClose} className="nav-links" to="/"><MenuItem primaryText="Home" /></Link>
						<Link onClick={this.handleLogout} className="nav-links" to="/login"><MenuItem primaryText={this.props.navbarLoginLinkText} /></Link>
						<Link onClick={this.handleRequestClose} className="nav-links" to="/new-user"><MenuItem primaryText="New User" /></Link>
						<Link onClick={this.handleRequestClose} className="nav-links" to="/new-trip"><MenuItem primaryText="New Trip" /></Link>
						<Link onClick={this.handleRequestClose} className="nav-links" to="/trips"><MenuItem primaryText="Trips" /></Link>
					</Menu>
				</Popover>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	isAppBarPopoverOpen: state.main.isAppBarPopoverOpen,
	popOverAnchor: state.main.popOverAnchor,
	navbarLoginLinkText: state.main.navbarLoginLinkText,
});


export default connect(mapStateToProps)(Navbar);