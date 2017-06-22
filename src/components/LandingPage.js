import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import '../css/LandingPage.css';
import mockup from '../assets/mockup.png';

export default class LandingPage extends Component {
	render() {
		return (
			<div className="LandingPage">
				<h1 className="landing-page-title">Traveler</h1>
				<h2>Capture Memories. Travel Well.</h2>
				<Paper className="mockup-container" zDepth={2}>
					<img className="mockup" src={mockup} alt="Traveler iPhone Mockup"/>
					<p className="mockup-text">It's easy to lose track of your journeys and even easier to forget how to enjoy them.
						<br/>
						<span>Traveler can help.</span>   
					</p>
					<p>
						Create trips, upload photos, and view your memories plotted out on a map
					</p>
				</Paper>
				<br/>
				<Link className="buttonContainer" to="/login">
					<RaisedButton primary={true} className="loginButton" label="Login" type="submit" />
				</Link>
				<Link className="buttonContainer" to="/new-user">
					<RaisedButton primary={true} className="newUserButton" label="Sign-up" type="submit" />
				</Link>
				<footer>
					<p>
						Built by Blake Sager
						<a href="https://github.com/chasingSublimity/Traveler-Frontend">
							<i className="fa fa-github fa-lg gh-icon" aria-hidden="true"></i>
						</a>
					</p>
				</footer>
			</div>
		);
	}
}