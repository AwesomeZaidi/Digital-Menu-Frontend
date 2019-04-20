
import React, { Component } from 'react';
import '../../styles/components/sidemenu.scss'
export default class SideMenu extends Component {
    render() {
        return (
            <div className='sidemenu'>
                <h4>Restaurant Chain Name</h4>

                <ul>
                    <li className='active'>Locations</li>
                    <li>Settings</li>
                    <li>Support?</li>
                </ul>
            </div>
        );
    };
};
