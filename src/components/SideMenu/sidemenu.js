
import React, { Component } from 'react';
import '../../styles/components/sidemenu.scss';
import { connect } from 'react-redux';

class SideMenu extends Component {
    render() {
        return (
            <div className='sidemenu'>
                <h4>{this.props.restaurant.restaurantName}</h4>

                <ul>
                    <li className='active'>Locations</li>
                    <li>Settings</li>
                    <li>Support?</li>
                </ul>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { restaurant: state.restaurant };
};
  
export default connect(mapStateToProps, null)(SideMenu);
  