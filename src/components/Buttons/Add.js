import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Add extends Component {
    render() {
        return (
            <Link to={this.props.url}>
            <button className='btn_primary'>
                Add {this.props.title}
            </button>
            </Link>
        );
    };
};