import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Add extends Component {
    render() {
        return (
            <Link to='/addLocation'>Add {this.props.title}</Link>
        );
    };
};