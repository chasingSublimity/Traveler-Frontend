import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Control from 'react-leaflet-control';

import * as actions from '../actions/index';
import '../css/TripMap.css';


const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;
const position1 = [32.7555, -97.3308];
const position2 = [42.7555, -97.3308];

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

// need to have a map container component
class TripMap extends Component {
	constructor(props)  {
		super(props);
		this.handleUpPanClick = this.handleUpPanClick.bind(this);
		this.handleRightPanClick = this.handleRightPanClick.bind(this);
		this.handleLeftPanClick = this.handleLeftPanClick.bind(this);
		this.handleDownPanClick = this.handleDownPanClick.bind(this);
	}

	componentDidMount() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.on('zoomend', () => {
			const updatedZoomLevel = leafletMap.getZoom();
			// fire action to set zoom level in redducer
		});
	}

	handleUpPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([0, -100]);
		console.log('panning up');
	}

	handleRightPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([100, 0]);
		window.console.log('Panning right');
	}

	handleLeftPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([-100, 0]);
		window.console.log('Panning left');
	}

	handleDownPanClick() {
		const leafletMap = this.leafletMap.leafletElement;
		leafletMap.panBy([0, 100]);
		window.console.log('Panning down');
	}


	render() {
		return (
			<div>
				<p>Look at this fancy ass map!</p>
				<Map
					ref={m => {this.leafletMap = m;}}
					center={mapCenter}
					zoom={zoomLevel}
				>
					<TileLayer
						attribution={stamenTonerAttr}
						url={stamenTonerTiles}
					/>
					<Marker position={position1}>
						<Popup>
							<span>A pretty CSS3 popup.<br/>Easily Customizable.</span>
						</Popup>
					</Marker>         
					<Marker position={position2}>
						<Popup>
							<span>A pretty CSS3 popup.<br/>Easily Customizable.</span>
						</Popup>
					</Marker>
					<Control position="topright" >
						<div 
							style={{
								backgroundColor: 'black',
								padding: '5px'
							}}
						>
							<div style={{ marginLeft: '37px' }}>
								<button onClick={this.handleUpPanClick}>
									Pan up
								</button>
							</div>
							<div>
								<button onClick={this.handleLeftPanClick}>
									Pan left
								</button>
								<button onClick={this.handleRightPanClick}>
									Pan right
								</button>
							</div>
							<div style={{ marginLeft: '30px' }}>
								<button onClick={this.handleDownPanClick}>
									Pan down
								</button>
							</div>
						</div>
					</Control>
				</Map>
			</div>
		); 
	}
}

const mapStateToProps = (state, props) => ({
	selectedTrip: state.main.selectedTrip,
	memories: state.main.memories,
	selectedMemory: state.main.selectedMemory
});

export default connect(mapStateToProps)(TripMap);