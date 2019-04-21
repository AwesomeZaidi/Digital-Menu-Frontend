import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Add extends Component {
    render() {
        const link = `/${this.props.restaurantId}/addLocation`
        return (
            <Link to={link}>Add {this.props.title}</Link>
        );
    };
};