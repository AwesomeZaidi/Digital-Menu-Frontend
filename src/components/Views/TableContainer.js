import React, { Component } from 'react';
import '../../styles/components/views.scss';
import EditBtn from '../Buttons/Edit';
import { connect } from 'react-redux';

class TableContainer extends Component {
    render() {
        return (
            <table class='container'>
                <tr>
                    {/* <th>{this.props.user}</th> */}
                    <th>Address</th>
                    <th>Menu URL</th>
                </tr>
                { this.props.locations ? 
                    this.props.locations.map(
                        (location, index) => {
                            return (
                                <tr key={'mykey' + index}>
                                    <td>{location.restaurantLocation}</td>
                                    <td>Address</td>
                                    <td>URlhereee <EditBtn /></td>
                                </tr>
                            )
                        }
                    )
                    : null
                }
                
            </table>

        );
    };
};

const mapStateToProps = state => {
    return {
        user: state.user,
        location: state.location
    };
};

  
export default connect(mapStateToProps, null)(TableContainer);
  