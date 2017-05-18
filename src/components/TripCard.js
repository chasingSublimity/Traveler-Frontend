import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import '../css/TripCard.css';


class TripCard extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// fire prop to store trip id in
		this.props.dispatch(actions.selectTrip(this.props.id));
	}

	render() {
		return (
			<a onClick={this.handleClick} href="#" >
				<div className="TripCard" id={this.props.id}>
					<img className="TripCard-image" src={this.props.imgUrl} alt=""/>
					<div className="TripCard-description">
						<p className="TripCard-origin">Origin: {this.props.origin}</p>
						<p className="TripCard-destination">Destination: {this.props.destination}</p>
						<p className="TripCard-beginDate">Begin: {this.props.beginDate}</p>
						<p className="TripCard-endDate">End: {this.props.endDate}</p>
					</div>
				</div>
			</a>
		); 
	}
}

// const mapStateToProps = (state, props) => ({

// });

export default connect(/*mapStateToProps*/)(TripCard);