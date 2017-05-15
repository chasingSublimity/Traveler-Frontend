import React, {Component} from 'react';
// import '../css/TripCreateForm.css';


class TripCard extends Component {

	render() {
		return (
			<div className="TripCard" >
				<img className="TripCard-image" src="" alt=""/>
				<div className="TripCard-description">
					<p className="TripCard-origin"></p>
					<p className="TripCard-destination"></p>
					<p className="TripCard-destination"></p>
					<p className="TripCard-beginDate"></p>
					<p className="TripCard-endDate"></p>
				</div>
			</div>
		); 
	}
}



export default TripCard;