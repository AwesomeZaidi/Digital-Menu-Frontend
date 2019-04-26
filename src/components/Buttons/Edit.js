import React, { Component, } from 'react';
import { Link } from 'react-router-dom';


export default class Edit extends Component {
    render() {
        const locationSpecificLink = `/location/${this.props.locationId}`;
        return (
            <button className='btn_edit'><Link to={locationSpecificLink}>Edit {this.props.title}</Link></button>
        );
    };
};