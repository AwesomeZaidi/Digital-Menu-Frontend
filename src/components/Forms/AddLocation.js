import React, { Component } from 'react';
import { Redirect } from 'react-router';

import '../../styles/locations.scss';


export default class AddLocation extends Component {

    
    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <div class='locations add-form'>
                    <p class='table-header'>Add Location</p>
                <form>
                    <div className='form-inputs'>
                        <div class='form-row'>
                            <div className='form-group'>
                                <label>Location Name</label>
                                <input placeholder='Name'></input>
                            </div>

                            <div className='form-group'>
                                <label>Street Address</label>
                                <input placeholder='Street Address'></input>
                            </div>

                            <div className='form-group'>
                                <label>State</label>
                                <input placeholder='State'></input>
                            </div>
                        </div>

                        <div class='form-row'>
                            <div class='form-group'>
                                <label>Location Number</label>
                                <input placeholder='(000) 000 0000'></input>
                            </div>

                            <div class='form-group'>
                                <label>City</label>
                                <input placeholder='City'></input>
                            </div>

                            <div class='form-group'>
                                <label>Zipcode</label>
                                <input placeholder='Zipcode'></input>
                            </div>
                        </div>
                        <div class='line'></div>
                        <button className='btn_save'>Save Changes</button>                    
                    </div>      

                </form>
            </div>
        );
    }
}