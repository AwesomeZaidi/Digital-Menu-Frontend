import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';

import '../../styles/locations.scss';

class AddLocation extends Component {
    
    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <div className='table-page add-form'>
                    <p className='table-header'>Add Location</p>
                <form>
                    <div className='form-inputs'>
                        <div className='form-row'>
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

                        <div className='form-row'>
                            <div className='form-group'>
                                <label>Location Number</label>
                                <input placeholder='(000) 000 0000'></input>
                            </div>

                            <div className='form-group'>
                                <label>City</label>
                                <input placeholder='City'></input>
                            </div>

                            <div className='form-group'>
                                <label>Zipcode</label>
                                <input placeholder='Zipcode'></input>
                            </div>
                        </div>
                        <div className='line'></div>
                        <button className='btn_save'>Save Changes</button>                    
                    </div>      

                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
        location: state.location
    };
};

export default connect(mapStateToProps, null)(AddLocation);
