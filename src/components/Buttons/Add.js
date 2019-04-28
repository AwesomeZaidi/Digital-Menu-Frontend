import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Add extends Component {
    render() {
        return (
            <button className='btn_primary'>
                {/* why can't I throw a ternary operator in here man. :/ */}
                <Link to='/addLocation'>Add {this.props.title}</Link>
            </button>
        );
    };
};