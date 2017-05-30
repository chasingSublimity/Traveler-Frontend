import React, {Component} from 'react';
import '../css/LandingPage.css';

export default class LandingPage extends Component {
	render() {
		return (
			<div>
				<h1 className="landing-page-title">Traveler</h1>
				<p>It's easy to lose track of your journeys and even easier to forget how to enjoy them.
					<br/>
					<span>Traveler can help.</span>
				</p>
			</div>
		);
	}
}