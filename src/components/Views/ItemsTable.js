import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditBtn from '../Buttons/Edit';

export default class  extends Component {
    render() {
        return (
            <table className='container'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Menu URL</th>
                </tr>
                { this.props.locations ? 
                    this.props.locations.map(
                        (location, index) => {
                            return (
                                <tr key={'mykey' + index}>
                                    <td>Name whenever backend creates it.</td>
                                    <td>{location.restaurantLocation}</td>
                                    <td>Unique URL Here <EditBtn /></td>
                                </tr>
                            )
                        }
                    )
                    : null
                }
            </tbody>
        </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        location: state.location
    };
};

export default connect(mapStateToProps, null)(ItemsTable);
