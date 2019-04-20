import React, { Component } from 'react';

export default class Add extends Component {
    render() {
        return (
            <button>Add {this.props.title}</button>
        );
    };
};