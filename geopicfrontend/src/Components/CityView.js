import React, { Component, AsyncStorage } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import CitySearch from './CitySearch'

class CityView extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(e) {
        AsyncStorage.getItem("city_name").then((value) => {
            alert("Get cit_name >> ", value);
        }).done();
    }

    render() {
        return (
            <button onclick={this.handleClick}>
                Search
            </button>
        )
    }
}

export default CityView;