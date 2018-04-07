import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
//import './css/CitySearch.css';

class CitySearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        alert('city searched: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Location:
                    <input type="text" value = {this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CitySearch;
