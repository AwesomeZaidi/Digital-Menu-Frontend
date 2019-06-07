import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import Footer from '../../components/Footer';
import { signup } from '../../redux/actions/index';

class Signup extends Component { 
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            position: '',
            password: '',
            error: this.props.error
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (event) => {   
        this.setState({ [event.target.id]: event.target.value });     
    };

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.firstName.length > 0 &&
            this.state.position.length > 0 &&
            this.state.phoneNumber.length > 0
        )
    };

    handleSubmit = e => {
        e.preventDefault();  
        this.props.signup(this.state);
    };

    render() {
        if (this.props.user) {
            return <Redirect to='/dashboard' />
        } 
        return (
            <>
                <div className='hero-section'>
                    <h1 className='center signup-title'>Join the Pilot Program now</h1>
                </div>
                <section className='signup form-wrapper'>            

                    <div className='user-form'>
                        <h2 className='content-section'>Sign up. Manage your menus.<br></br>Avoid issues.</h2>
                        <p className='content-section'>Now’s your chance to get your free digital menu. There’s no better way to connect all your digital menus,
                            never have wrong listed prices again, and bring in more business.
                        </p>

                        <h4 className='content-section'>So what happens when you submit this form?</h4>
                        <ul className='content-section'>
                            <li className='content-section'>We’ll reach out to let you know if you’ve been selected.</li>
                            <li className='content-section'>If you get picked, we’ll collect more info to get things set up for you.</li>
                            <li className='content-section'>We’ll keep you updated about the program’s timeline and other details.</li>
                        </ul>
                        
                        <p className='content-medium'>Even if you don’t get picked, you can still become an early adopter. You’ll be eligible for huge discounts and exclusive offers.</p>

                        <p className='content-medium'>When we say free, we mean it — <strong>no signup fees, upfront costs, or anything like that.</strong> You really have nothing to lose.
                            Join now for your shot at all the benefits Digital Menu has to offer.
                        </p>
                        <div className='push-down'></div>
                        <div className="section-divider"></div>
                        <div className='pad-down'></div>
                        <h4 className='content-section'>Personal information</h4>
                        <p className='content-section'>Tell us how to contact you. We respect your privacy and we’ll never sell, rent, lease or give away your information — ever.</p>

                        <form onSubmit={this.handleSubmit} className='top-down-left'>
                            <div className='form-group'>
                                <label htmlFor='firstName'>First name</label>
                                <input id='firstName' type='text' name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.handleChange}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='lastName'>Last name</label>
                                <input id='lastName' type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Your email</label>
                                <input id='email' type='email' name='email' placeholder='name@domain.com' value={this.state.email} onChange={this.handleChange}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='phoneNumber'>Phone Number</label>
                                <input id='phoneNumber' type='phone' name='phoneNumber' placeholder='123 123 1234' value={this.state.phoneNumber} onChange={this.handleChange}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='position'>Your position</label>
                                <input id='position' name='position' placeholder='Position' value={this.state.position} onChange={this.handleChange}></input>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <span className='label-subtext'>minimum 6 characters</span>
                                <input id='password' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}></input>
                            </div>

                            <p>We may contact you between 11 AM and 5 PM Eastern</p>

                            {/* <h2>Restaurant information</h2>
                            <p>Tell us about your restaurant. No matter where you are we can make your menu digital and better.</p> */}

                            {/* <label for='number'>Your contact phone</label>
                            <input name='number' placeholder='(123)-345-6789'></input> */}
                            <br></br>
                            {this.props.error === true ?
                            <p className='error-msg'>Uh Oh. Something went wrong. Please check all fields.</p>
                            : null}
                            
                            <button className='auth-btn' onClick={this.handleSubmit} disabled={!this.validateForm()} type='submit'>Join Digital Menu</button>
                        </form>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user, restaurant: state.restaurant, error: state.error };
};

function mapDispatchToProps() {
    return {
        signup
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(Signup);


