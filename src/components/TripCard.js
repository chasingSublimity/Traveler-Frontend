import React, {Component} from 'react';
import '../css/TripCard.css';


class TripCard extends Component {

	render() {
		return (
			<div className="TripCard" data-id={this.props.dataId}>
				<img className="TripCard-image" src={this.props.imgUrl} alt=""/>
				<div className="TripCard-description">
					<p className="TripCard-origin">Origin: {this.props.origin}</p>
					<p className="TripCard-destination">Destination: {this.props.destination}</p>
					<p className="TripCard-beginDate">Begin: {this.props.beginDate}</p>
					<p className="TripCard-endDate">End: {this.props.endDate}</p>
				</div>
			</div>
		); 
	}
}



export default TripCard;