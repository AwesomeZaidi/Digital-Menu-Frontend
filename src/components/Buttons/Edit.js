import React, { Component, } from 'react';
import { Link } from 'react-router-dom';


export default class Edit extends Component {
    render() {
        const locationSpecificLink = `/restaurant/${this.props.restaurantId}/location/${this.props.locationId}/items`;
        return (
            <Link to={locationSpecificLink}><button className='btn_edit'>Edit {this.props.title}</button></Link>
        );
    };
};