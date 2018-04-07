import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import CitySearch from './Components/CitySearch'
import logo from './logo.svg';
import './css/App.css';


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 33.4517, lng: -112.0745 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 33.4517, lng: -112.0745 }} />}
  </GoogleMap>
))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          <CitySearch/>
        </p>
        <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&language=en&region=US&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div className="Map" />}
        />
      </div>
    );
  }
}

export default App;
