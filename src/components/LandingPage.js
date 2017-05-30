import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import '../css/LandingPage.css';
import mockup from '../assets/mockup.png';
import memoryForm from '../assets/memory-create.png';

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
				</Paper>
			</div>
		);
	}
}