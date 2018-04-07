import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
//import axios from 'axios';
//import './css/CitySearch.css';

class CitySearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            address: '',
            lat: '',
            lng: '',
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.address});
    }

    handleSubmit(e) {
        alert('city searched: ' + this.state.address);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Location:
                    <input type="text" value = {this.state.address} onChange={this.handleChange} placeholder="City" />
                </label>
                <input type="button" value="Search" />
            </form>
        );
    }
}

export default CitySearch;
