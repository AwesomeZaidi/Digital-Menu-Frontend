import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
// import SelectState from '../../components/SelectState';

import { addRestaurant } from '../../redux/actions/index';
// import logo from '../../Images/logo-only.png';

class AddRestaurant extends Component { 
    constructor(props) {
        super(props);
        
        this.state = {
            restaurantName: '',
            state: '',
            city: '',
            zipOrPostalCode: '',
            streetAddress: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (event) => {   
        this.setState({ [event.target.id]: event.target.value });     
    };

    validateForm() {
        return this.state.restaurantName.length > 0 && this.state.zipOrPostalCode.length > 0 && this.state.streetAddress.length > 0 && this.state.city.length > 0;
    };


    handleSubmit = e => {
        e.preventDefault();
        console.log("submit hereeeee");
        this.props.addRestaurant(this.state);

    };

    render() {
        if (this.props.user && this.props.restaurant != "") {
            return <Redirect to='/dashboard' />
        }
        if (!this.props.user) {
            return <Redirect to='/signup' />
        }
        return (
            <div>
                <div className='hero-section'>
                    <h1 className='center'>Add your restaurant</h1>
                </div>
                <section className='add-restaurant form-wrapper'>                
                    <div className='user-form' onSubmit={this.handleSubmit}>
                        {/* <h2 className='content-section'>Sign up. Manage your menus.<br></br>Avoid issues.</h2> */}
                        <h4 className='content-section'>Restaurant information</h4>
                        <p className='content-section'>Add your restaurant information here to access the full Digital Menu.</p>

                            <div className='push-down'></div>
                            <div className="section-divider"></div>
                            <div className='pad-down'></div>

                            <form onSubmit={this.handleSubmit} className='top-down-left'>
                                <div className='form-group'>
                                    <label htmlFor='restaurantName'>Restaurant name</label>
                                    <input id='restaurantName' type='text' name='restaurantName' placeholder='Restaurant Name' value={this.state.restaurantName} onChange={this.handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <select id='state' name='state' value={this.state.state} onChange={this.handleChange}>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>	
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='city'>City</label>
                                    <input id='city' name='city' placeholder='San Francisco' value={this.state.city} onChange={this.handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='zipOrPostalCode'>Zip or Postal Code</label>
                                    <input id='zipOrPostalCode' name='zipOrPostalCode' placeholder='Zipcode' value={this.state.zipOrPostalCode} onChange={this.handleChange}></input>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='streetAddress'>Street Address</label>
                                    <input id='streetAddress' name='streetAddress' placeholder='Street Address' value={this.state.streetAddress} onChange={this.handleChange}></input>
                                </div>

                                <p>We may contact you between 11 AM and 5 PM Eastern</p>

                                {/* <h2>Restaurant information</h2>
                                <p>Tell us about your restaurant. No matter where you are we can make your menu digital and better.</p> */}

                                {/* <label for='number'>Your contact phone</label>
                                <input name='number' placeholder='(123)-345-6789'></input> */}
                                <button type='submit'>Add Restaurant</button>
                            </form>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, restaurant: state.restaurant };
};

function mapDispatchToProps() {
    return {
        addRestaurant
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(AddRestaurant);


