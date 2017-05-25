import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

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
						<Link onClick={this.handleRequestClose} className="nav-links" to="/login"><MenuItem primaryText="Login" /></Link>
						<Link onClick={this.handleRequestClose} className="nav-links" to="/new-user"><MenuItem primaryText="New User" /></Link>
						<Link onClick={this.handleRequestClose} className="nav-links" to="/new-trip"><MenuItem primaryText="New Trip" /></Link>
						<Link onClick={this.handleRequestClose} className="nav-links" to="/new-memory"><MenuItem primaryText="New Memory" /></Link>
						<Link onClick={this.handleRequestClose} className="nav-links" to="/trips"><MenuItem primaryText="Trips" /></Link>
					</Menu>
				</Popover>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	isAppBarPopoverOpen: state.main.isAppBarPopoverOpen,
	popOverAnchor: state.main.popOverAnchor
});


export default connect(mapStateToProps)(Navbar);