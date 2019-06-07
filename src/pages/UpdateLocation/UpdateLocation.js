import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { getLocation, updateLocation } from '../../redux/actions/index';
import '../../styles/locations.scss';
import Lottie from 'lottie-react-web'
import loadAnimation from '../../assets/lotties/load.json';
import greenCheck from '../../assets/lotties/greenCheck.json';

class UpdateLocation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationName: this.props.location.locationName,
            streetAddress: this.props.location.streetAddress,
            state: this.props.location.state,
            city: this.props.location.city,
            zipcode: this.props.location.zipcode,
            locationPhoneNumber: this.props.location.locationPhoneNumber,
            restaurantId: this.props.match.params.locationId,
            loading: false,
            locationId: this.props.match.params.locationId,
        };
    };

    componentDidMount = () => {
        this.props.getLocation(this.state.restaurantId, this.state.locationId);
    };

    validateForm = () => {
        return this.state.locationName.length > 0 && this.state.streetAddress.length > 0 &&
        this.state.state.length > 0 && this.state.city.length > 0 & this.state.zipcode.length > 0 &&
        this.state.locationPhoneNumber.length > 0;
    };

    handleChange = (event) => {   
        const target = event.target;
        const value = event.target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });     
    };

    handleSubmit = async (e) => {
        this.setState({ loading: true });
        e.preventDefault();
        // why doesn't this return a response value?
        this.props.updateLocation(this.state).then(() => {
            this.setState({
                loading: 'done'
            });
        }).catch(() => {
            this.setState({ loading: 'error' });
        });

        //TODO: pop up modal confirming location was created. Getting sent into location specific page.
    };

    render() {
        if (!this.props.user) {
            return <Redirect to='/'/>
        }
        return (
            <div className='table-page add-form'>
                    <p className='table-header'>Update {this.props.location.locationName} Location</p>
                <form>
                    <div className='form-inputs'>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label htmlFor='locationName'>Location Name</label>
                                <input value={this.state.locationName} name='locationName' placeholder='Location Name' onChange={this.handleChange}></input>
                            </div>

                            <div className='form-group'>
                                <label>Street Address</label>
                                <input value={this.state.streetAddress} name='streetAddress' placeholder='Street Address' onChange={this.handleChange}></input>
                            </div>

                            <div className='form-group'>
                                <label>State</label>
                                <input value={this.state.state} name='state' placeholder='State' onChange={this.handleChange}></input>
                            </div>
                        </div>

                        <div className='form-row'>
                            <div className='form-group'>
                                <label htmlFor='locationPhoneNumber'>Location Number</label>
                                <input value={this.state.locationPhoneNumber} name='locationPhoneNumber' placeholder='(000) 000 0000' onChange={this.handleChange}></input>
                            </div>

                            <div className='form-group'>
                                <label>City</label>
                                <input value={this.state.city} name='city' placeholder='City' onChange={this.handleChange}></input>
                            </div>

                            <div className='form-group'>
                                <label>Zipcode</label>
                                <input value={this.state.zipcode} name='zipcode' placeholder='Zipcode' onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className='line'></div>
                        {
                            this.state.loading === false ?
                                <button onClick={this.handleSubmit} className='btn_save'>
                                    Save Changes
                                </button>   
                            : this.state.loading === true ?
                                <button onClick={this.handleSubmit} className='btn_save'>
                                    <Lottie options={{
                                        animationData: loadAnimation,
                                        loop: 0
                                        }}/>
                                </button>
                            : this.state.loading === 'done' ?
                                <div>
                                    <button onClick={this.handleSubmit} className='btn_save_success'>
                                        <Lottie options={{
                                            animationData: greenCheck,
                                            loop: 0,
                                        }}/>
                                    </button>
                                </div>
                            : this.state.loading === 'error' ?
                                // change this error message later. 
                                <button onClick={this.handleSubmit} disabled={!this.validateForm()} className='btn_save'>
                                    There was a problem saving this, Try Again. <span role="img" aria-label='sad-face'>😟</span>
                                </button>
                            :
                                null
                        }          
                    </div>      

                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
        location: state.location,
        restaurant: state.restaurant
    };
};

function mapDispatchToProps() {
    return {
        getLocation,
        updateLocation
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(UpdateLocation);
