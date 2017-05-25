import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {GridTile} from 'material-ui/GridList';
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
			<Link to="#" onClick={this.handleClick}  >
				<GridTile
					id={this.props.id}
					title={`${this.props.origin} -> ${this.props.destination}`} 
					subtitle={`${this.props.beginDate} -> ${this.props.endDate}`}
					onClick={this.handleClick}
				>
					<img alt="" src={'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/30/26/seattle.jpg'} />
				</GridTile>
			</Link>	
		); 
	}
}

// const mapStateToProps = (state, props) => ({

// });

export default connect(/*mapStateToProps*/)(TripCard);