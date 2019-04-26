import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Add extends Component {
    render() {
        return (
            <button className='btn_primary'><Link to='/addLocation'>Add {this.props.title}</Link></button>
        );
    };
};