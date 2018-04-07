import React, { Component, AsyncStorage } from 'react';
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
        AsyncStorage.setItem("city_name", this.state.city_name)
    }

    handleClick(e) {
        AsyncStorage.getItem("city_name").then((value) => {
            alert("Get cit_name >> ", value);
        }).done();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value = {this.state.value} onChange={this.handleChange} placeholder="City: " />
                </label>
            </form>

        );
    }
}

export default CitySearch;
