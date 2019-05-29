import React, { Component } from 'react';
import EditBtn from '../Buttons/Edit';
import { connect } from 'react-redux';

class TableContainer extends Component {

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
                                        <td>{location.locationName}</td>
                                        <td>{location.streetAddress}</td>
                                        <td><a className='cursor'>https://digitalmenu.com/restaurants/{this.props.restaurant._id + '/locations/' + location._id}/items</a><EditBtn restaurantId={this.props.restaurant._id} locationId={location._id}/></td>
                                    </tr>
                                )
                            }
                        )
                        : null // maybe change the UI for this a little bit later.
                    }
                </tbody>
            </table>

        );
    };
};

const mapStateToProps = state => {
    return {
        user: state.user,
        location: state.location,
        restaurant: state.restaurant
    };
};

  
export default connect(mapStateToProps, null)(TableContainer);
  