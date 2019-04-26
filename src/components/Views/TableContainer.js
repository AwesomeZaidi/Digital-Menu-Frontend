import React, { Component } from 'react';
import '../../styles/components/views.scss';
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
                                        <td>Name whenever backend creates it.</td>
                                        <td>{location.restaurantLocation}</td>
                                        <td>Unique URL Here <EditBtn restaurantId={this.props.restaurant._id} locationId={location._id}/></td>
                                    </tr>
                                )
                            }
                        )
                        : null
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
        restaurant: restaurant
    };
};

  
export default connect(mapStateToProps, null)(TableContainer);
  